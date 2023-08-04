import styled from "styled-components";

export const Screen = styled.header`
  max-width: ${({ theme }) => theme.width.max};
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 9rem;
`;

export const BoxHeader = styled.div`
  h2 {
    text-align: center;
    font-size: 1.5rem;
  }
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
  }
`;
