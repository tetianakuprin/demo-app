import React, { FC } from "react";
import { ButtonWrapper, MainButton } from "./Button.styled";
import { THEME } from "../../../ulits/theme";

interface ButtonProps {
  handleClick?: () => void;
  title: string;
  color?: string;
  background?: string;
  type?: "button" | "submit" | "reset" | undefined;
  height?: string;
}

export const Button: FC<ButtonProps> = ({
  handleClick,
  title,
  color = THEME.white,
  background = THEME.grey,
  type = "button",
  height = "auto",
}) => (
  <ButtonWrapper data-testid="Button">
    <MainButton
      $color={color}
      $background={background}
      $height={height}
      onClick={handleClick}
      type={type}
    >
      {title}
    </MainButton>
  </ButtonWrapper>
);
