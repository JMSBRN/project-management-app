import { render, screen } from "@testing-library/react";
import React from "react";
import Logo from "./Logo";

describe("<Link />", () => {
  it("should be ", () => {
    render(<Logo />);
  });
  expect(screen.getByText(/test/i)).toBeInTheDocument();
});
