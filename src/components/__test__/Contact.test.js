import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<ContactUs />);

  // Check for the <h1> heading
  const heading = screen.getByRole("heading", {
    name: "Contact Us",
    level: 1,
  });
  expect(heading).toBeInTheDocument();

  // Verify form elements
  expect(screen.getByPlaceholderText("Your Name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Your Email Address")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Your Message")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
});
