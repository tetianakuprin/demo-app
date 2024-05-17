import styled from "styled-components";
import { THEME } from "../../ulits/theme";

export const ModalWrapper = styled.div``;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 9;
`;

export const DialogWrapper = styled.dialog`
  border-radius: 6px;
  padding: 1.5rem;
  width: 30rem;
  max-width: 90%;
  z-index: 10;
  background: ${THEME.white};
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 2rem;
`;

export const Title = styled.h2`
  margin-top: 0;
`;
