import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {

    const [resList, setResList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        // console.log(json);
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setResList(restaurants);
        setFilteredList(restaurants);
    };


    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <h1>internet not working..</h1>
        )



    return (
        <div className="body">
            <div className="filter">

                <button
                    className="filter-btn"
                    onClick={() => {
                        const filtered = resList.filter(
                            (res) => res.info?.avgRating > 4.5
                        );
                        setFilteredList(filtered);
                    }}
                >
                    Top Rated Restaurants
                </button>

                <button
                    className="filter-btn"
                    onClick={() => {
                        setFilteredList(resList);
                    }}
                >
                    Reset
                </button>
            </div>

            <div className="res-container">
                {filteredList.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={`/restaurant/${restaurant.info.id}`}
                    >
                        <RestaurantCard resData={restaurant.info} />
                    </Link>
                ))}

                {/* {filteredList.map((restaurant) => (
                    <Link to={`/restaurant/${restaurant.info.id}`}>
                        <RestaurantCard
                            key={restaurant.info.id}
                            resData={restaurant.info}
                        />
                    </Link>

                ))} */}
            </div>
        </div>
    );
};

export default Body;
