import { useContext, useState } from "react";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-icon" alt="Logo" src="/logo.png" />
      </div>
      <nav>
        <ul>
          <li>
            Online Status: <span>{onlineStatus ? "✅" : "🟥"}</span>
          </li>
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
            <img alt="cart" src="/cart.png" />
          </li>
          <li>
            <button
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li>User : {loggedInUser}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
