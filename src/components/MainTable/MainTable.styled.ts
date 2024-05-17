import styled from "styled-components";
import { THEME } from "../../ulits/theme";

export const MainTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const TitleTanle = styled.h2<{ $color: boolean }>`
  color: ${(props) => (props.$color ? THEME.blue : THEME.grey)};
`;

export const AddNew = styled.div`
  margin: 2rem;
`;
