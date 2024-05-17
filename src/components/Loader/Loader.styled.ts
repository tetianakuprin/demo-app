import styled from "styled-components";

export const LoaderWrapper = styled.div``;

export const LoadingSpinner = styled.img`
  height: 8rem;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
