import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { RES_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchRestaurantData();
    }, [])

    const fetchRestaurantData = async () => {
        const response = await fetch(RES_API_URL);
        const responseJson = await response.json();
        setRestaurantData(responseJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantData(responseJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if (filteredRestaurantData.length === 0) {
        return <Shimmer />
    }
    return (
        <div className="body">
            <div className="filter">
                <input className="search" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button onClick={() => {
                    const searchResultList = restaurantData.filter((res) => res.info.name.toUpperCase().includes(searchText.toUpperCase()));
                    setFilteredRestaurantData(searchResultList);
                }}>Search</button>
                <button
                    className="btn"
                    onClick={() => {
                        const topRatedRestaurantList = restaurantData.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteredRestaurantData(topRatedRestaurantList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurantData.map((restaurant) => {
                    return (
                        <RestaurantCard
                            key={restaurant?.info?.id}
                            restaurantData={restaurant}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
