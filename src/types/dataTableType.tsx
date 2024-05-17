export type DataTableType = {
  headings: HeaderType[];
  items: RowType[];
};

export type HeaderType = {
  displayName: string;
  columnID: string;
};

export type RowType = string[];
