import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockRestaurantData.json";
import RestaurantCard, { withFastDeliveryBanner } from "../RestaurantCard";

test("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("McDonald's");

  expect(name).toBeInTheDocument();
});

test("Should render Fast Delivery card with label", () => {
  const FastDeliveryCard = withFastDeliveryBanner(RestaurantCard);

  render(<FastDeliveryCard resData={MOCK_DATA} />);

  const fastBanner = screen.getByText("Fast Delivery");

  expect(fastBanner).toBeInTheDocument();
});
