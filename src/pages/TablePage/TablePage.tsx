import React, { FC } from "react";
import { TablePageWrapper } from "./TablePage.styled";
import { MainTable } from "../../components";

interface TablePageProps {}

export const TablePage: FC<TablePageProps> = () => (
  <TablePageWrapper data-testid="TablePage">
    <MainTable />
  </TablePageWrapper>
);
