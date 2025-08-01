import RestaurantCard, { withFastDeliveryBanner } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useRestaurantList } from "../utils/useRestaurantList";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
  const restaurantList = useRestaurantList();
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const onlineStatus = useOnlineStatus();

  const FastDeliveryRestaurantCard = withFastDeliveryBanner(RestaurantCard);

  useEffect(() => {
    setFilteredList(restaurantList);
  }, [restaurantList]);

  // console.log(filteredList);

  return !onlineStatus ? (
    <h2>You are offline. Please check your internet connection</h2>
  ) : restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div>
          <input
            type="text"
            data-testid="searchBar"
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
          data-testid="filterBtn"
          onClick={() => {
            setFilteredList(
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
            {/* <RestaurantCard resData={restaurant}></RestaurantCard> */}
            <FastDeliveryRestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
