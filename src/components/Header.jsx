import { useState } from "react";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-icon" alt="Logo" src="/logo.png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? "✅" : "🟥"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <img className="cart-icon" alt="cart" src="cart.png"></img>
          </li>
          <li>
            <button
              onClick={() => {
                btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
