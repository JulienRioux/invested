import React from "react";
import "./PresentationCard.css";

const PresentationCard = props => {
	const { currentSearchType, infoList, searchInput } = props;
	let title;
	let cardTitle;
	if(currentSearchType === "company"){
		cardTitle = [infoList[1].split("/")[0], infoList[1].split("/")[1]];
		title = (
			<div>
				<h6 className="supTitle">{ cardTitle[0] }</h6>
				<h1 className="cardTitle">{ cardTitle[1] }</h1>
			</div>
		)
	}
	else if(currentSearchType === "investor") {
		cardTitle = infoList[1];
		title = (
			<div>
				<h6 className="supTitle">{ searchInput }</h6>
				<h1 className="cardTitle">{ cardTitle }</h1>
			</div>
		)
	}
	else {
		cardTitle = infoList[1];
		title = (
			<div>
				<h6 className="supTitle">Hedge fund</h6>
				<h1 className="cardTitle">{ cardTitle }</h1>
			</div>
		)
	}
	const infoRow1 = [infoList[2], infoList[3]];
	const infoRow2 = [infoList[4], infoList[5]];
	const infoRow3 = [infoList[6], infoList[7]];
	const infoRow4 = [infoList[8], infoList[9]];
	const infoRow5 = [infoList[10], infoList[11]];



	return(
		<div className="cardDiv">
			<div className="cardHeader">
				{ title }
			</div>
			<div className="infoRow darkRow">
				<div className="infoLabel">{ infoRow1[0] }</div>
				<div className="infoData">{ infoRow1[1] }</div>
			</div>
			<div className="infoRow">
				<div className="infoLabel">{ infoRow2[0] }</div>
				<div className="infoData">{ infoRow2[1] }</div>
			</div>
			<div className="infoRow darkRow">
				<div className="infoLabel">{ infoRow3[0] }</div>
				<div className="infoData">{ infoRow3[1] }</div>
			</div>
			<div className="infoRow">
				<div className="infoLabel">{ infoRow4[0] }</div>
				<div className="infoData">{ infoRow4[1] }</div>
			</div>
			<div className="infoRow darkRow">
				<div className="infoLabel">{ infoRow5[0] }</div>
				<div className="infoData">{ infoRow5[1] }</div>
			</div>
		</div>
	)
}

export default PresentationCard;
