//CUSTOM HOOK
import { useEffect, useState } from "react";
import { RestaurantListAPI } from "../utils/constants";

export const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RestaurantListAPI);
    const json = await response.json();

    const listCard = json?.data?.cards.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const list = listCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setRestaurantList(list);
  };

  return restaurantList;
};
