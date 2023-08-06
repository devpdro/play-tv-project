import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Container = styled.main`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.text};
  @media (max-width: 800px) {
    height: 100%;
    .icon {
      margin-top: 0.2rem;
      font-size: 1.5rem !important;
    }
    h1 {
      margin-top: 1.9rem;
      font-size: 1.6rem !important;
    }
  }
  @media (min-width: 800px) and (max-width: 1380px) {
    height: 105vh;
  }
  .icon {
    position: absolute;
    top: 35px;
    left: 40px;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.background};
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.4);
    }
  }
  h1 {
    color: ${({ theme }) => theme.colors.background};
    text-align: center;
    font-size: 2.2rem;
  }
  .box_login {
    padding: 0rem 1rem;
    gap: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .box_img {
      cursor: pointer;
      transition: transform 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
      h4 {
        margin-top: 0;
      }
      .img {
        width: 200px;
        height: 200px;
      }
    }
    h4 {
      color: ${({ theme }) => theme.colors.background};
      text-align: center;
      font-size: 1.2rem;
    }
  }
  .box_login {
    margin-top: 3rem;
    .login_button {
      padding: 1rem 1.4rem;
      border-radius: 3px;
      font-size: 1.2rem;
      border: none;
      margin-bottom: 3rem;
      outline: none;
      font-family: "Poppins", sans-serif;
      cursor: pointer;
      background: linear-gradient(to left, #f1f6ff, #ebf0ff, #e3ebeb);
      transition: transform 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
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
  }
`;
