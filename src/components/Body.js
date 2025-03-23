import Restaurants from "../utils/Restaurants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { use, useEffect, useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const corsAPIKey = "5294f507";
  const corsEmail = "therealsagarverma@gmail.com";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setRestaurantList(
      data.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    setFilteredList(
      data.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  };

  return restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              setFilteredList(
                restaurantList.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                )
              );
              console.log(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantList(
              restaurantList.filter((res) => res.info.avgRating > 4.3)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
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
