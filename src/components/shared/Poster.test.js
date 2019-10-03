import React from "react";
import { render } from "@testing-library/react";
import Poster from "./Poster";

it("renders without crashing", () => {
  const mockProps = {
    title: "mockTitle",
    path: "mockPath",
  };
  const container = render(<Poster {...mockProps} />);
  expect(container).toBeDefined();
});
