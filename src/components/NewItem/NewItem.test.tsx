import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { NewItem } from "./NewItem";
import { RowType } from "../../types/dataTableType";

describe("<NewItem />", () => {
  test("it should mount", () => {
    render(
      <NewItem
        colums={[]}
        onDone={function (): void {
          throw new Error("Function not implemented.");
        }}
        addNew={function (row: RowType): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const newItem = screen.getByTestId("NewItem");

    expect(newItem).toBeInTheDocument();
  });
});
