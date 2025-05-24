import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  //   console.log(data);
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    console.log("Clicked");
    setShowItems(!showItems);
  };

  return (
    <div className="menu-category-accordion">
      <div
        className="item-header"
        onClick={() => {
          handleClick();
        }}
      >
        <span>
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>
          {showItems === true ? (
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios/50/circled-chevron-up.png"
              alt="circled-chevron-up"
            />
          ) : (
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios/50/circled-chevron-down.png"
              alt="circled-chevron-down"
            />
          )}
        </span>
      </div>
      <div>{showItems && <ItemList items={data?.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
