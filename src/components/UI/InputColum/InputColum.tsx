import React, { FC } from "react";
import {
  InputColumWrapper,
  InputWrapper,
  InputWrapperRefresh,
} from "./InputColum.styled";

interface InputColumProps {
  defaultValue: string;
  handleBlur: (event: any) => void;
  refreshCol: boolean;
}

export const InputColum: FC<InputColumProps> = ({
  defaultValue,
  handleBlur,
  refreshCol,
}) => {
  return (
    <InputColumWrapper>
      {refreshCol ? (
        <InputWrapper defaultValue={defaultValue} onBlur={handleBlur} />
      ) : (
        <InputWrapperRefresh defaultValue={defaultValue} onBlur={handleBlur} />
      )}
    </InputColumWrapper>
  );
};
