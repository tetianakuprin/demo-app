import styled from "styled-components";

export const ButtonWrapper = styled.div``;

export const MainButton = styled.button<{
  $color: string;
  $background: string;
  $height: string;
}>`
  color: ${(props) => props.$color};
  background: ${(props) => props.$background};
  height: ${(props) => props.$height};
  border: none;
  border-radius: 0.3rem;
  padding: 0.2rem 1rem;
`;
