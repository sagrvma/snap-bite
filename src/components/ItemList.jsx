import { useDispatch } from "react-redux";
import { RestaurantImageAPI } from "../utils/constants.jsx";
import { addItem } from "../utils/cartSlice.jsx";

const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="item-list">
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="item"
            data-testid="foodItem"
          >
            <div style={{ flex: 1 }}>
              <div className="item-name-price">
                <div className="item-name">{item?.card?.info?.name}</div>
                <div className="item-price">
                  ₹{""}
                  {(item?.card?.info?.price ?? item?.card?.info?.defaultPrice) /
                    100}
                </div>
              </div>
              <div className="item-description">
                {item?.card?.info?.description}
              </div>
            </div>
            <div className="item-image-container">
              <img
                className="item-image"
                src={RestaurantImageAPI + item?.card?.info?.imageId}
              />
              <button
                className="item-add-button"
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
