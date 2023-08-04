import styled from "styled-components";

export const Container = styled.nav`
  border-bottom: 1px solid #cacacd;
  div {
    max-width: ${({ theme }) => theme.width.max};
    margin: 0 auto;
    h1 {
      color: ${({ theme }) => theme.colors.text};
      padding-left: 7.8rem;
      font-size: 1.5rem;
      em {
        padding-right: 10px;
        background-image: ${({ theme }) => theme.colors.gradient};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;
