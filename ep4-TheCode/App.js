import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://imgs.search.brave.com/tu0c6MF6BUOeFB3gtk6a9miKo88wMYHtb-Q4OYCOY78/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEwLzk2Lzc2/LzM2MF9GXzMxMDk2/NzY2Nl9VUVFYUzFU/dHM5d2FrM2hKa2VM/Q2d3WllJYkNCSzZU/Zi5qcGc" />
            </div>
            <div className="nav-list">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
            <h3>{name}</h3>
            <h3>{avgRating} Star</h3>
            <h3>{cuisines.join(", ")} Star</h3>
            <h3>{costForTwo}</h3>
            <h3>{sla.deliveryTime} minutes</h3>
        </div>
    );
}


const resObj = [
    {
        "info": {
            "id": "736434",
            "name": "Murthal No.1 Parantha",
            "cloudinaryImageId": "743ffc0123317228d2b9b3698c034361",
            "locality": "Rajinder nagar market",
            "areaName": "Karol Bagh",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "North Indian",
                "Snacks",
                "Punjabi",
                "Beverages",
                "Street Food"
            ],
            "avgRating": 4.3,
            "parentId": "142082",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-22 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹399",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d9a1c143-e1ad-47f0-94ae-b6b205976da5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/murthal-no-1-parantha-rajinder-nagar-market-karol-bagh-delhi-736434",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "736106",
            "name": "No. 1 Uncles Parantha",
            "cloudinaryImageId": "44ab3587cba7bfb3429778ccfa7a7a79",
            "locality": "Old rajinder nagar market",
            "areaName": "Karol Bagh",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Indian"
            ],
            "avgRating": 4.2,
            "parentId": "149677",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-22 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹399",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d9a1c143-e1ad-47f0-94ae-b6b205976da5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/no-1-uncles-parantha-old-rajinder-nagar-market-karol-bagh-delhi-736106",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "455052",
            "name": "Food Bus Of India",
            "cloudinaryImageId": "41c2f8fb21110abcf44830e7b0930ffa",
            "locality": "Rajendra Place",
            "areaName": "Rajendra Place",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Indian",
                "Snacks",
                "Fast Food",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "273675",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-23 04:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹95",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.6",
                    "ratingCount": "1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d9a1c143-e1ad-47f0-94ae-b6b205976da5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/food-bus-of-india-rajendra-place-delhi-455052",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "374828",
            "name": "Sri Saravana Bhavan",
            "cloudinaryImageId": "d1892373c42789d64b43ae5b933bf418",
            "locality": "Karol Bagh",
            "areaName": "Karol Bagh",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "South Indian",
                "Biryani"
            ],
            "avgRating": 3.9,
            "parentId": "20505",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-22 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d9a1c143-e1ad-47f0-94ae-b6b205976da5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sri-saravana-bhavan-karol-bagh-delhi-374828",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "32024",
            "name": "Prem Di Hatti (Since 1977)",
            "cloudinaryImageId": "fjtpjadpspos4r7p5kj2",
            "locality": "Rajouri Garden",
            "areaName": "Rajouri Garden",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Street Food",
                "Indian"
            ],
            "avgRating": 4.4,
            "parentId": "471227",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-22 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d9a1c143-e1ad-47f0-94ae-b6b205976da5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/prem-di-hatti-since-1977-rajouri-garden-delhi-32024",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "44972",
            "name": "Om di Hatti(Kamla Nagar)",
            "cloudinaryImageId": "ypoamjz9lkaxlsf6075j",
            "locality": "Shakti Nagar",
            "areaName": "Kamla Nagar",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Fast Food",
                "Snacks"
            ],
            "avgRating": 4.2,
            "parentId": "22243",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 5.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "5.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-22 20:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d9a1c143-e1ad-47f0-94ae-b6b205976da5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/om-di-hatti-kamla-nagar-shakti-nagar-kamla-nagar-delhi-44972",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "81523",
            "name": "Amma Mess",
            "cloudinaryImageId": "iqni2wqhjjkryporrgmv",
            "locality": "Karol Bagh",
            "areaName": "Karol Bagh",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian"
            ],
            "avgRating": 4.5,
            "parentId": "15687",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-22 11:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d9a1c143-e1ad-47f0-94ae-b6b205976da5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/amma-mess-karol-bagh-delhi-81523",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "317724",
            "name": "Grover Mithaivala",
            "cloudinaryImageId": "bba088ec8a7e007024efc7d9cdabd37c",
            "locality": "1St Block",
            "areaName": "West Patel Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Sweets",
                "Street Food",
                "Snacks",
                "Desserts"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "3749",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 12,
                "lastMileTravel": 0.3,
                "serviceability": "SERVICEABLE",
                "slaString": "10-15 mins",
                "lastMileTravelString": "0.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-22 22:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d9a1c143-e1ad-47f0-94ae-b6b205976da5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/grover-mithaivala-1st-block-west-patel-nagar-delhi-317724",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resObj.map(restaurant => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)