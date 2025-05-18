import { RestaurantCardImageAPI } from "../utils/constants.jsx";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info; //optional chaining, destructuring
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={RestaurantCardImageAPI + cloudinaryImageId}
      ></img>
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
