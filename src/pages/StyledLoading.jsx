import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  background-color: black;
  position: relative;
  .box_title {
    position: absolute;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 350%);
    color: white;
  }
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #fff;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: ${spin} 1s linear infinite;
    margin-right: 10px;
    z-index: 999;
  }
  .img {
    position: absolute;
    width: 100vw;
    top: 0;
    height: 100vh;
  }
`;
