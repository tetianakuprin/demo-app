import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { InputColum } from "./InputColum";

describe("<InputColum />", () => {
  test("it should mount", () => {
    render(<InputColum defaultValue={""} handleBlur={function (event: any): void {
      throw new Error("Function not implemented.");
    } } refreshCol={false} />);

    const inputColum = screen.getByTestId("InputColum");

    expect(inputColum).toBeInTheDocument();
  });
});
