import React from "react"
import "./resCardComponent.css"
import { IMG_URL } from "../../utils/constants"

function ResCardComponent(props) {
	const { resData } = props
	// console.log("resList:", resData)
	const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
		resData?.info

	return (
		<div className="rest-card">
			<img
				src={IMG_URL + cloudinaryImageId}
				alt="food-logo"
				className="food-logo"
			/>
			<h2>{name}</h2>
			<h4>{cuisines.join(",")}</h4>
			<h4>{avgRating} stars</h4>
			<h5>Rs {costForTwo}</h5>
		</div>
	)
}

export default ResCardComponent
