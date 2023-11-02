import { CDN_URL } from "../utils/constants";

const RestaurentCard = ({ rescard }) => {
  const { ...data } = rescard.data;
  const {
    name,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    deliveryTime,
    avgRating,
  } = data;

  // console.log(data);
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} alt={name} className="res-logo" />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>DeliveryTime: {deliveryTime}</p>
      <p>₹{costForTwo / 100} FOR TWO</p>
      <p>Average Rating:{avgRating}</p>
    </div>
  );
};

export default RestaurentCard;
