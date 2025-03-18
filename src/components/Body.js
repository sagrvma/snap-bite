import Restaurants from "../utils/Restaurants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(Restaurants);

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
