import { render, screen } from "@testing-library/react";
import React from "react";
import Email from "./Email";

describe("<Link />", () => {
  it("should be ", () => {
    render(<Email />);
  });
  expect(screen.getByText(/test/i)).toBeInTheDocument();
});
