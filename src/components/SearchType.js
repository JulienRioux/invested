import React from "react";
import "./SearchType.css";

const SearchType = props => {

	// initiate the active classes
	let investorActive;
	let companyActive;
	let fundActive;
	// add the active class to the active search type
	if(props.currentSearchType === "investor"){
		investorActive = "searchTypeActive";
	}
	else if(props.currentSearchType === "company"){
		companyActive = "searchTypeActive";
	}
	else if(props.currentSearchType === "fund"){
		fundActive = "searchTypeActive";
	}

	return (
		<div className="searchTypeDiv">
			<button
				onClick={ props.searchCompany }
				className={`searchTypeBtn ${ companyActive }`}>company</button>
			<button
				onClick={ props.searchInvestor }
				className={`searchTypeBtn ${ investorActive }`}>investor</button>
			<button
				onClick={ props.searchFund }
				className={`searchTypeBtn ${ fundActive }`}>hedge fund</button>
		</div>
	)
}

export default SearchType;
