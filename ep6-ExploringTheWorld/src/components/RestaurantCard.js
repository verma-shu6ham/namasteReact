import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" src={`${CDN_URL}${cloudinaryImageId}`} />
            <h3>{name}</h3>
            <h3>{avgRating} Star</h3>
            <h3>{cuisines.join(", ")} Star</h3>
            <h3>{costForTwo}</h3>
            <h3>{sla.deliveryTime} minutes</h3>
        </div>
    );
}

export default RestaurantCard;