import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { NewItem } from "./NewItem";

describe("<NewItem />", () => {
  test("it should mount", () => {
    render(<NewItem onDone={undefined} colums={[]} addNew={undefined} />);

    const newItem = screen.getByTestId("NewItem");

    expect(newItem).toBeInTheDocument();
  });
});
