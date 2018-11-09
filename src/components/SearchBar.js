import React, { Component } from "react";
import "./SearchBar.css";
import Ionicon from 'react-ionicons';
import Loader from "./Loader";
import SearchResult from "./SearchResult";
import Suggestions from "./Suggestions";
import PresentationCard from "./PresentationCard";

// let fetchUrl = "https://invested-api.appspot.com";

let fetchUrl = "https://investor-app-api.herokuapp.com";

// let fetchUrl = "http://localhost:3001";


export default class SearchBar extends Component {
	state = {
		searchInput: "",
		data: [],
		infoList: [],
		error: false,
		isLoading: false
	}

	startLoading = () => {
		// create the start loader function
		this.setState({
			isLoading: true,
			data: [],
			error: false
		})
	}


	handleSubmit = e => {
		this.startLoading();
		e.preventDefault();
		const { searchInput } = this.state;
		const url = `${ fetchUrl }/search`;
		const data = {
			searchInput: searchInput,
			searchType: this.props.currentSearchType,
		};
		fetch(url, {
		  method: 'POST',
			headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
    	},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		  .then(async data => {
				console.log(data.infoList);
				await this.setState({
					data: data.resultsList,
					infoList: data.infoList,
					error: data.error,
					isLoading: false
				})
			})
			.catch(async (err) => {
				// set the fetched data in the state
				await this.setState({
					data: [],
					error: data.error,
					isLoading: false
				})
			});
	}

	handleChange = e => {
		this.setState({
			searchInput: e.target.value,
			data: [],
			error: false
		});
	}

	suggestClick = (suggestion) => {
		this.setState({
			searchInput: suggestion,
			error: false
		});
	}

	resetSearch = () => {
		this.setState({
			searchInput: "",
			data: [],
			error: false
		});
	}

	componentDidUpdate(prevProps) {
		// restart the search if the user change the search type
	  if (this.props.currentSearchType !== prevProps.currentSearchType) {
	    this.setState({
				searchInput: "",
				data: [],
				error: false
			});
	  }
	}

	render() {
		const { data, error } = this.state;
		// initiate the placeholder
		let placeholderType;
		let resultType;
		// add the active class to the active search type
		if(this.props.currentSearchType === "investor"){
			placeholderType = "investor";
			resultType = "invested in these companies";
		}
		else if(this.props.currentSearchType === "company"){
			placeholderType = "company";
			resultType = "Investors list";
		}
		else if(this.props.currentSearchType === "fund"){
			placeholderType = "hedge fund";
			resultType = "invested in these companies";
		}

		// create an empty search result
		let searchResult = "";

		// check if there is an error while fetching data
		if(data.length > 0 && !error){
			// if not return the data as a list
			searchResult = data.map((result, i) => (
				<SearchResult
					result={ result }
					key={ i + "" }
					currentSearchType={ this.props.currentSearchType } />
			))
		}

		// Create a custom message
		let errorMsg;
		if(this.state.searchInput.length === 0){
			errorMsg = "input can't be empty ☝️"
		} else {
			errorMsg = `😞${ this.state.searchInput } cannot be found using fintel.io...`
		}


		return (
			<div>
				<div className="searchBarDiv">
					<form
						onSubmit={ this.handleSubmit }
						className="searchForm"
						autoComplete="off">
						<input
							value={ this.state.searchInput }
							onChange={ this.handleChange }
							placeholder={`Search for ${ placeholderType }`}
							className="search-input"
							type="search"
							id="search-input"
							aria-label="Searching"/>
						<button className="search-btn">
							<Ionicon icon="ios-search" fontSize="45px" color="#029e74"/>
					</button>
					</form>
				</div>
				<div className="allSearchResult">

					{ data.length > 0 ? (
						<div>
							<button
								onClick={ this.resetSearch }
								className="resetBtn">reset rearch</button>
							<PresentationCard
								searchInput={ this.state.searchInput }
								infoList={ this.state.infoList }
								currentSearchType={ this.props.currentSearchType } />
						  <h2 className="resultTitle">{ resultType }</h2>
						</div>
					) : (
						<Suggestions
							suggestClick={ this.suggestClick }
							currentSearchType={ this.props.currentSearchType } />
					)}
					{ this.state.isLoading && (<Loader />) }
					{ error ? (
						<p className="notFound">{ errorMsg }</p>
					) : searchResult }
				</div>
			</div>
		)
	}
}
