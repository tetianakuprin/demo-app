import React, { FC, useState } from "react";
import {
  ErrorMessage,
  InputWrapper,
  NewItemWrapper,
  Input,
  ButtonWrapper,
} from "./NewItem.styled";
import { Button, Modal } from "../index";
import { HeaderType, RowType } from "../../types/dataTableType";
import { THEME } from "../../ulits/theme";

interface NewItemProps {
  onDone: any;
  colums: HeaderType[];

  addNew: any;
}

export const NewItem: FC<NewItemProps> = ({
  onDone,
  colums,

  addNew,
}) => {
  const [emptyDataError, setEmptyDataError] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const newDataArr: RowType = [];
    colums.map(
      (el) =>
        event.target[el.columnID].value.trim() &&
        newDataArr.push(event.target[el.columnID].value.trim())
    );
    if (newDataArr.length === colums.length) {
      setEmptyDataError(false);
      onDone();
      addNew(newDataArr);
    } else {
      setEmptyDataError(true);
    }
  };

  return (
    <NewItemWrapper data-testid="NewItem">
      <Modal title="New Item" onClose={onDone}>
        <ErrorMessage>
          {emptyDataError && <h4>All fields are required</h4>}
        </ErrorMessage>
        <form id="new-challenge" onSubmit={handleSubmit}>
          {colums.map((el) => (
            <InputWrapper key={el.columnID}>
              <label htmlFor="title">{el.displayName}</label>
              <Input
                type="text"
                placeholder={el.displayName}
                name={el.columnID}
                id={el.columnID}
              />
            </InputWrapper>
          ))}
          <ButtonWrapper>
            <Button
              type="button"
              handleClick={onDone}
              title="Cancel"
              height="2rem"
            />
            <Button
              type="submit"
              title="Add New"
              background={THEME.green}
              height="2rem"
            />
          </ButtonWrapper>
        </form>
      </Modal>
    </NewItemWrapper>
  );
};

// import React, { FC, useState } from "react";
// import {
//   ErrorMessage,
//   InputWrapper,
//   NewItemWrapper,
//   Input,
//   ButtonWrapper,
// } from "./NewItem.styled";
// import { Button, Modal } from "../index";
// import { HeaderType, RowType } from "../../types/dataTableType";
// import { THEME } from "../../ulits/theme";

// interface NewItemProps {
//   onDone: any;
//   colums: HeaderType[];

//   addNew: any;
// }

// export const NewItem: FC<NewItemProps> = ({
//   onDone,
//   colums,

//   addNew,
// }) => {
//   const [emptyDataError, setEmptyDataError] = useState(false);

//   const handleSubmit = (event: any) => {
//     event.preventDefault();

//     const newDataArr: RowType = [];
//     colums.map(
//       (el) =>
//         event.target[el.columnID].value.trim() &&
//         newDataArr.push(event.target[el.columnID].value.trim())
//     );
//     if (newDataArr.length === colums.length) {
//       setEmptyDataError(false);
//       onDone();
//       addNew(newDataArr);
//     } else {
//       setEmptyDataError(true);
//     }
//   };

//   return (
//     <NewItemWrapper data-testid="NewItem">
//       <Modal title="New Item" onClose={onDone}>
//         {emptyDataError && <ErrorMessage>All fields are required</ErrorMessage>}
//         <form id="new-challenge" onSubmit={handleSubmit}>
//           {colums.map((el) => (
//             <InputWrapper key={el.columnID}>
//               <label htmlFor="title">{el.displayName}</label>
//               <Input
//                 type="text"
//                 placeholder={el.displayName}
//                 name={el.columnID}
//                 id={el.columnID}
//               />
//             </InputWrapper>
//           ))}
//           <ButtonWrapper>
//             <Button type="button" handleClick={onDone} title="Cancel" />
//             <Button title="Add New" background={THEME.green} />
//           </ButtonWrapper>
//         </form>
//       </Modal>
//     </NewItemWrapper>
//   );
// };
