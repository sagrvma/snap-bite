import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./About.jsx";
import ContactUs from "./ContactUs.jsx";
import Error from "./Error.jsx";
import RestaurantMenu from "./RestaurantMenu.jsx";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
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
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
