import logo from "../utils/logo.png";
import cart from "../utils/cart.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-icon" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img className="cart-icon" src={cart}></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
