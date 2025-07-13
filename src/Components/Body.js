import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList(restaurants);
        setFilteredList(restaurants);
    };


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
                    <RestaurantCard
                        key={restaurant.info.id}
                        resData={restaurant.info}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
