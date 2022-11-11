import { render, screen } from "@testing-library/react";
import React from "react";
import Form from "./Form";

describe("<Form />", () => {
  it("should be ", () => {
    const mockOnSubmit = jest.fn();
    render(<Form onSubmit={mockOnSubmit} label="test" />);
  });
});
