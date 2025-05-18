//CUSTOM HOOK

import { useEffect, useState } from "react";
import { RestaurantMenuAPI } from "./constants";

export const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RestaurantMenuAPI + resId);
    const json = await response.json();

    setResInfo(json.data);
  };

  return resInfo;
};
