import { RestaurantImageAPI } from "../utils/constants.jsx";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info; //optional chaining, destructuring
  return (
    <div className="res-card" data-testid="resCard">
      <img
        className="res-img"
        src={RestaurantImageAPI + cloudinaryImageId}
      ></img>
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

//Higher Order Function*****
export const withFastDeliveryBanner = (WrappedRestaurantCard) => {
  return (props) => {
    const deliveryTime = props?.resData?.info?.sla?.deliveryTime;
    const isFast = deliveryTime <= 30;
    return (
      <div className="fast-delivery-wrapper">
        {isFast && <div className="fast-delivery-banner">Fast Delivery</div>}
        <WrappedRestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
