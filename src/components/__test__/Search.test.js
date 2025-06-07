import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import MOCK_DATA from "../mocks/mockRestauratListData.json";
import { BrowserRouter } from "react-router";
import Body from "../Body";

global.fetch = jest.fn(() => {
  //making a mock fetch function since it is provided by browsers, not there in jsdom
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should search resList for Ice input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  //   console.log(searchBtn);

  expect(searchBtn).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchBar");

  fireEvent.change(searchInput, { target: { value: "ice" } });

  fireEvent.click(searchBtn);

  const resultCards = screen.getAllByTestId("resCard");
  expect(resultCards.length).toBe(2);
});

test("Should filter top rated restaurants from resList", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cards = screen.getAllByTestId("resCard");
  console.log(cards.length);

  const filterBtn = screen.getByTestId("filterBtn");

  fireEvent.click(filterBtn);

  const topRatedResCards = screen.getAllByTestId("resCard");
  expect(topRatedResCards.length).toBe(9);
});
