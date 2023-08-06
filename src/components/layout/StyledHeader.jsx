import styled from "styled-components";

export const Screen = styled.header`
  max-width: ${({ theme }) => theme.width.max};
  margin: 0 auto;
`;

export const Highlights = styled.h1`
  padding-left: 3rem;
  span {
    border-bottom: 4px solid;
    border-image: linear-gradient(
        135deg,
        #d30c1e,
        #e80b56,
        #f40a76,
        #fd0a90,
        #ff1b7b,
        #ff325a,
        #ff5427
      )
      1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.7rem;
  margin-bottom: 1.4rem;
`;

export const BoxHeader = styled.div`
  div {
    h1 {
      font-size: 4rem;
      text-align: center;
      font-weight: 900;
      em {
        padding-right: 10px;
        background-image: ${({ theme }) => theme.colors.gradient};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      span {
        margin-top: -32px;
        display: block;
      }
    }
    @media (max-width: 800px) {
      h1 {
        font-size: 3.1rem !important;
      }
    }
  }
`;
