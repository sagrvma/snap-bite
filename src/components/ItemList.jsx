import { RestaurantImageAPI } from "../utils/constants.jsx";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="item-list">
      {items.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="item">
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
              <button className="item-add-button">Add +</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
