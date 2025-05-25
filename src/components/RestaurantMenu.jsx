import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  // console.log(id);

  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) return <Shimmer />;

  // const { name, cuisines, costForTwoMessage } =
  //   resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //This was not working for some restaurants as api has different structure for different restaurants
  //We should search dynamically

  const resInfoCard = resInfo?.cards.find((card) => card?.card?.card?.info); //*******
  // console.log(resInfoCard);
  const { name, cuisines, costForTwoMessage } =
    resInfoCard?.card?.card?.info || {};

  // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //To get itemCards, use double find

  const menuItemCategories = resInfo?.cards
    .find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
    ?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // const itemCards = menuItemCards?.card?.card?.itemCards || [];
  // console.log(menuItemCards);

  // const itemCards = menuItemCards?.card?.card?.itemCards || {};

  console.log(resInfo);

  // if (!Array.isArray(itemCards) || itemCards.length == 0) {
  //   return <h2>Menu not available currently.</h2>;
  // } //Handling error cases

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{costForTwoMessage}</h2>
      <ul>
        {/* {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs
            {(item?.card?.info?.price ?? item?.card?.info?.defaultPrice) / 100}
          </li>
        ))} */}
        {menuItemCategories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
