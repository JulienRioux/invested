import React from "react";
import "./SearchResult.css";

const SearchResult = props => {
	let result = props.result.split("/");
	if(props.currentSearchType !== "company"){
		result = (
			<p className="searchResult"><span style={{ fontWeight: "bold" }}>{ result[0] }</span>: { result[1] }</p>
		)
	} else {
		result = <p className="searchResult">{ result }</p>;
	}

	return (
		<div key={ props.index } className="searchResultDiv">
			{ result }
		</div>
	)
}

export default SearchResult;
