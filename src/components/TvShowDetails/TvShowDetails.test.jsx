import React from "react";
import { render } from "@testing-library/react";
import TvShowDetails from "./TvShowDetails";

it("renders without crashing", () => {
  const mockProps = {
    match: {
      params: {
        showId: "mockId",
      },
    },
  };
  const container = render(<TvShowDetails {...mockProps} />);
  expect(container).toBeDefined();
});
