import styled from "styled-components";

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.colors.gradientBackground};
  border-bottom: 1px solid #cacacd;
  div {
    max-width: ${({ theme }) => theme.width.maxNav};
    margin: 0 auto;
    h1 {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.5rem;
      padding: 0 3rem;
      font-weight: 900;
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
