import React from "react";
import { render } from "@testing-library/react";
import Rating from "./Rating";

it("renders without crashing", () => {
  const mockProps = {
    title: "mockTitle",
    votes: 1,
  };
  const container = render(<Rating {...mockProps} />);
  expect(container).toBeDefined();
});
