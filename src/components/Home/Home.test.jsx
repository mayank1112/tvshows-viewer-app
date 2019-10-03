import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

it("renders without crashing", () => {
  const container = render(<Home />);
  expect(container).toBeDefined();
});
