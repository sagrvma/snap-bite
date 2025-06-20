import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, selectCartItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div className="cart">
      <h1>Cart</h1>
      <button
        className="cart-clear-btn"
        onClick={handleClick}
        disabled={cartItems.length === 0}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1 className="cart-empty-msg">Cart is Empty</h1>
      )}
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
