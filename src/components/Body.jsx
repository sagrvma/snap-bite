import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RestaurantListAPI } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RestaurantListAPI);
    const data = await response.json();
    console.log(data);
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
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant}></RestaurantCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
