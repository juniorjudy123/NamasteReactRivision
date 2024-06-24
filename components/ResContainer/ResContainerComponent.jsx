import React from "react"
import "./resContainerComponent.css"
import { IMG_URL } from "../../utils/constants"

function ResContainerComponent(props) {
	const { resData } = props
	console.log("resData:", resData.info)
	const { name, cuisines, avgRating, costForTwo } = resData.info

	return (
		<div className="rest-card">
			<img src={IMG_URL} alt="food-logo" className="food-logo" />
			<h2>{name}</h2>
			<h4>{cuisines.join(",")}</h4>
			<h4>{avgRating} stars</h4>
			<h5>Rs {costForTwo}</h5>
		</div>
	)
}

export default ResContainerComponent
