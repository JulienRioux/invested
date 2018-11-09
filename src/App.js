import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SearchType from "./components/SearchType";



class App extends Component {
	state = {
		searchType: "company"
	}

	searchInvestor = () => {
		this.setState({searchType: "investor"})
	}

	searchCompany = () => {
		this.setState({searchType: "company"})
	}

	searchFund = () => {
		this.setState({searchType: "fund"})
	}

  render() {
    return (
      <div className="App">
				<Navbar />
        <div className="container">
					<SearchType
						currentSearchType={ this.state.searchType }
						searchInvestor={ this.searchInvestor }
						searchCompany={ this.searchCompany }
						searchFund={ this.searchFund } />
					<SearchBar
						currentSearchType={ this.state.searchType } />
				</div>
      </div>
    );
  }
}

export default App;
