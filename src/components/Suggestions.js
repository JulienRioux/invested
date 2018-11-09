import React, { Component } from "react";
import "./Suggestions.css";

class Suggestions extends Component {



	render(){
		let suggestionsList = [];
		if(this.props.currentSearchType === "company"){
			suggestionsList = ["tsla", "aapl", "amzn", "googl", "wmt", "mcd", "spy", "pep", "msft", "ea", "ko", "siri", "v", "pfe", "atsg"];
		}
		else if(this.props.currentSearchType === "investor"){
			suggestionsList = ["Brian Mueller", "Sergio Morales", "Divya Nettimi", "Adam Morgan", "Thomas Morgan", "John Mucher", "Mathe Mosny", "Veton Nimani", "Oleg Nodelman", "Matt Niblack", "Vito Menza", "Karen Menezes", "Willem Mesdag", "Gordon Ritter"];
		}
		else if(this.props.currentSearchType === "fund"){
			suggestionsList = ["AQR Capital Management LLC", "Berkshire Hathaway", "Falcon Point Capital LLC", "Portolan Capital Management LLC", "Kayne Anderson Capital Advisors L.P.", "Hillsdale Investment Management", "Ruffer LLP", "Ashfield Capital Partners, LLC", "Redpoint Investment Management Pty", "Cedar Capital, LLC", "Arlington Value Capital LLC"];
		}



		const suggestions = suggestionsList.map((sug, i) => (
			<button
				key={ i + "" }
				onClick={ () => this.props.suggestClick(sug) }
				value={ sug }
				className="suggestionButton">{ sug.toUpperCase() }</button>
		))
		return (
			<div className="suggestionDiv">
				<div className="suggestionsList">
					{ suggestions }
				</div>
			</div>
		)
	}
}

export default Suggestions;
