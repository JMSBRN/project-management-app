import { render, screen } from "@testing-library/react";
import React from "react";
import Language from "./Language";

describe("<Link />", () => {
  it("should be ", () => {
    render(<Language />);
  });
  expect(screen.getByText(/test/i)).toBeInTheDocument();
});
