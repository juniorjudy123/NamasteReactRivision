import ResCardComponent from "../ResCard/ResCardComponent"
import "./bodyComponent.css"
import { resList } from "../../utils/mockData"
import { useState } from "react"

export const BodyComponent = () => {
	const [listofRestaurants, setListsOfRestaurants] = useState(resList)
	return (
		<div className="body">
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						const filterdList = listofRestaurants.filter(
							(res) => res.info.avgRating > 4.5
						)
						setListsOfRestaurants(filterdList)
					}}
				>
					Top Rated Restaurants
				</button>
			</div>

			<div className="res-container">
				{listofRestaurants.map((res) => (
					<ResCardComponent key={res.info.id} resData={res} />
				))}
			</div>
		</div>
	)
}
