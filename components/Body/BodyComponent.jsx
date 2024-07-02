import ResCardComponent from "../ResCard/ResCardComponent"
import "./bodyComponent.css"
import { resList } from "../../utils/mockData"
import { useEffect, useState } from "react"
import SchimmerComponent from "../Schimmer/SchimmerComponent"

export const BodyComponent = () => {
	const [listofRestaurants, setListsOfRestaurants] = useState([])
	const [searchText, setSearchText] = useState("")
	console.log("body rendered")

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.960368&lng=76.2415938&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		)

		const json = await data.json()
		console.log(
			json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
		)

		setListsOfRestaurants(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		)
	}

	return listofRestaurants.length === 0 ? (
		<SchimmerComponent />
	) : (
		<div className="body">
			<div className="filter">
				<div className="search">
					<input
						type="text"
						className="search-box"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					></input>
					<button className="search-btn">search</button>
				</div>
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
