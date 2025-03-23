import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js";
import Body from "./Body.js";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./About.js";
import ContactUs from "./ContactUs.jsx";
import Error from "./Error.jsx";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
