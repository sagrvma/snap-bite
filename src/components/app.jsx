import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./About.jsx";
import ContactUs from "./ContactUs.jsx";
import Error from "./Error.jsx";
import RestaurantMenu from "./RestaurantMenu.jsx";
import UserContext from "../utils/UserContext.jsx";
import appStore from "../utils/appStore.jsx";
import { Provider } from "react-redux";
import Cart from "../components/Cart.jsx";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: "Sagar" }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
