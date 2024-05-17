import React, { FC } from "react";
import { LoaderWrapper, LoadingSpinner } from "./Loader.styled";

interface LoaderProps {}

export const Loader: FC<LoaderProps> = () => (
  <LoaderWrapper data-testid="Loader">
    <LoadingSpinner src="/loading.svg" alt="loading" />
  </LoaderWrapper>
);
