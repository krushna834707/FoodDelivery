import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    return (
        <div className="w-64 bg-white rounded-xl shadow-md hover:shadow-xl  m-4 p-4 h-[400px]">
            <img className="w-full h-40 object-cover rounded-xl" alt="Image Not showing" src={IMG_CDN_URL + resData.cloudinaryImageId} />
            <h4 className="text-lg font-semibold text-gray-800">{resData.name}</h4>
            <h4 className="text-sm text-gray-500 mt-1 truncate">{resData.cuisines.join(", ")}</h4>
            <h4 className="flex justify-between items-center mt-2 text-sm text-gray-600">{resData.avgRating}</h4>
            <h4 className=" px-2 py-0.5 rounded-full font-medium">{resData.costForTwo || "Cost info not available"}</h4>
        </div>
    );
}

export default RestaurantCard;