import { render, screen } from "@testing-library/react";
import React from "react";
import Link from "./Link";

describe("<About />", () => {
  it("should be ", () => {
    render(<Link to="/test" text="test" />);
  });
  expect(screen.getByText(/test/i)).toBeInTheDocument();
});
