import styled from "styled-components";
import { THEME } from "../../ulits/theme";

export const NewItemWrapper = styled.div``;

export const ErrorMessage = styled.div`
  height: 2rem;
  h4 {
    color: ${THEME.red};
    margin: 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 4rem;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

export const Input = styled.input`
  height: 2rem;
  &:focus {
    outline: none;
    outline-offset: 0px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
