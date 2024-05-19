import React, { FC } from "react";
import { Backdrop, DialogWrapper, ModalWrapper, Title } from "./Modal.styled";
import { createPortal } from "react-dom";

interface ModalProps {
  title: string;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ title, children, onClose }) => {
  const modelEl = document.getElementById("modal");

  return modelEl
    ? createPortal(
        <ModalWrapper data-testid="Modal">
          <Backdrop onClick={onClose} />
          <DialogWrapper open>
            <Title>{title}</Title>
            {children}
          </DialogWrapper>
        </ModalWrapper>,
        modelEl
      )
    : null;
};
