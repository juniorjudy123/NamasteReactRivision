import ResContainerComponent from "../ResContainer/ResContainerComponent"
import "./bodyComponent.css"
export const BodyComponent = () => {
	const resObj = {
		info: {
			id: "704921",
			name: "Chinese Wok",
			cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
			locality: "Ravipuram",
			areaName: "M G Road",
			costForTwo: "₹250 for two",
			cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
			avgRating: 4.3,
			parentId: "61955",
			avgRatingString: "4.3",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 33,
				lastMileTravel: 4.8,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "4.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-25 01:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "ITEMS",
				subHeader: "AT ₹169",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-2a00e079-b445-43de-91d6-c8b9ee21ecb6",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/chinese-wok-ravipuram-m-g-road-kochi-704921",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	}
	return (
		<div>
			<div className="search">search</div>
			<div className="res-container">
				<ResContainerComponent resData={resObj} />

				{/* <ResContainerComponent />
				<ResContainerComponent />
				<ResContainerComponent />
				<ResContainerComponent />
				<ResContainerComponent />
				<ResContainerComponent />
				<ResContainerComponent />
				<ResContainerComponent />
				<ResContainerComponent />
				<ResContainerComponent />
				<ResContainerComponent />
				<ResContainerComponent /> */}
			</div>
		</div>
	)
}
