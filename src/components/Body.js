import Restaurants from "../utils/Restaurants";
import RestaurantCard from "./RestaurantCard";
import { use, useEffect, useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setRestaurantList(
      data.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  };

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantList(
              restaurantList.filter((res) => res.info.avgRating > 4.3)
            );
          }}
        >
          Filter
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          ></RestaurantCard>
        ))}
      </div>
    </div>
  );
};

export default Body;
