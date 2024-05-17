import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TablePage } from "./TablePage";

describe("<TablePage />", () => {
  test("it should mount", () => {
    render(<TablePage />);

    const tablePage = screen.getByTestId("TablePage");

    expect(tablePage).toBeInTheDocument();
  });
});
