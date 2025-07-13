import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="Image Not showing" src={IMG_CDN_URL + resData.cloudinaryImageId} />
            <h4>{resData.name}</h4>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.costForTwo || "Cost info not available"}</h4>
        </div>
    );
}

export default RestaurantCard;