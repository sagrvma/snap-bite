import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockRestaurantMenuData.json";
import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import RestaurantMenu from "../RestaurantMenu.jsx";
import Header from "../Header";
import Cart from "../Cart";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should load restaurant menu component with initial cart value as 0", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Beverages. (16)");

  fireEvent.click(accordionHeader);

  const cartCount = screen.getByTestId("cartCount");

  expect(cartCount).toHaveTextContent(0);
});

test("Should increase cart count in header to 1 and then 2 on adding 2 items", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const cartCount = screen.getByTestId("cartCount");

  expect(cartCount).toHaveTextContent(0);

  const accordionHeader = screen.getByText("Beverages. (16)");
  fireEvent.click(accordionHeader);

  const initialFoodItems = screen.getAllByTestId("foodItem");
  console.log(initialFoodItems.length);
  expect(initialFoodItems.length).toBe(16);

  const addButtons = screen.getAllByRole("button", { name: "Add +" });
  console.log(addButtons.length);

  fireEvent.click(addButtons[0]);

  expect(cartCount).toHaveTextContent(1);

  const newFoodItems = screen.getAllByTestId("foodItem");
  expect(newFoodItems.length).toBe(17); //this is including the accordion and also the cart that is being rendered

  fireEvent.click(addButtons[1]);

  expect(cartCount).toHaveTextContent(2);

  const latestFoodItems = screen.getAllByTestId("foodItem");
  expect(latestFoodItems.length).toBe(18);
});
