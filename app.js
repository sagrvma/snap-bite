import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import cart from "./cart.png";

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

const AppLayout = () => {
  return <Header />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);
