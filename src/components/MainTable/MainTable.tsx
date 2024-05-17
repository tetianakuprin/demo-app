import React, { FC, useEffect, useState } from "react";
import { MainTableWrapper, TitleTanle, AddNew } from "./MainTable.styled";
import { TABLE_DATA } from "../../constants/tableData";
import { DataTableType, HeaderType, RowType } from "../../types/dataTableType";
import { Button, InputColum, Loader, NewItem } from "../index";
import { THEME } from "../../ulits/theme";

interface MainTableProps {}

export const MainTable: FC<MainTableProps> = () => {
  const [refreshCol, setRefreshCol] = useState(true);
  const [isAddNew, setIsAddNew] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const [tableDataHeadings, setTableDataHeadings] = useState<HeaderType[]>([]);

  const [tableDataValue, setTableDataValue] = useState<RowType[]>([]);
  // const [tableDataValue, setTableDataValue] = useState<RowType[]>([
  //   ...tableData.items.map((arr) => [...arr]),
  // ]);

  // 5000 ms
  useEffect(() => {
    let tableData: DataTableType = TABLE_DATA;
    setTimeout(() => {
      setTableDataValue(() => {
        const updateTableDataValue = [
          ...tableData.items.map((arr) => [...arr]),
        ];
        return updateTableDataValue;
      });
      setTableDataHeadings(() => {
        const updateTableDataValue = [...tableData.headings];
        return updateTableDataValue;
      });
      setIsLoading(true);
    }, 5000);
  }, []);

  const handleBlur = (
    event: { target: { value: any } },
    rowIndex: number,
    colIndex: number,
    col: string
  ) => {
    setTableDataValue((prevTableDataValue: RowType[]) => {
      const updateTableDataValue = [...prevTableDataValue];
      if (event.target.value.trim()) {
        updateTableDataValue[rowIndex][colIndex] = event.target.value;
      } else {
        updateTableDataValue[rowIndex][colIndex] = col;
        setRefreshCol((prev) => !prev);
      }
      return updateTableDataValue;
    });
    // tableDataValue - new table value
  };

  const handleClick = (rowIndex: number) => {
    setTableDataValue((prevTableDataValue: RowType[]) => {
      const updatedTableDataValue = [...prevTableDataValue];
      updatedTableDataValue.splice(rowIndex, 1);
      return updatedTableDataValue;
    });
    setRefreshCol((prev) => !prev);
  };

  const handleClickAdd = () => {
    setIsAddNew(true);
  };

  const addNew = (row: RowType) => {
    setTableDataValue((prevTableDataValue: RowType[]) => {
      const updatedTableDataValue = [...prevTableDataValue];
      updatedTableDataValue.push(row);
      return updatedTableDataValue;
    });
    setRefreshCol((prev) => !prev);
  };

  function handleDone() {
    setIsAddNew(false);
  }

  return (
    <MainTableWrapper data-testid="MainTable">
      {isAddNew && (
        <NewItem
          onDone={handleDone}
          colums={tableDataHeadings}
          addNew={addNew}
        />
      )}
      <TitleTanle $color={loading}>
        Table
        {tableDataHeadings.length > 0 &&
          tableDataHeadings.map((el) => ` "${el.displayName}" `)}{" "}
      </TitleTanle>
      {loading ? (
        <>
          <table>
            <thead>
              <tr>
                <th></th>
                {tableDataHeadings.map((el) => (
                  <th key={el.columnID}>{el.displayName}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableDataValue.map((row, rowIndex: number) => (
                <tr key={rowIndex}>
                  <td>
                    <Button
                      handleClick={() => handleClick(rowIndex)}
                      title={"Remove"}
                      background={THEME.red}
                    />
                  </td>
                  {row.map((col, colIndex) => (
                    <td key={colIndex}>
                      <InputColum
                        defaultValue={col}
                        handleBlur={(event) => {
                          handleBlur(event, rowIndex, colIndex, col);
                        }}
                        refreshCol={refreshCol}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <AddNew>
            <Button
              handleClick={handleClickAdd}
              title={"Add new item"}
              background={THEME.green}
              height="2rem"
            />
          </AddNew>
        </>
      ) : (
        <Loader />
      )}
    </MainTableWrapper>
  );
};
