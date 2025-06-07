import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

test("Clicking Login button should change text to Logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();

  fireEvent.click(loginButton);

  const logoutButton = screen.getByText("Logout");
  expect(logoutButton).toBeInTheDocument();
});
