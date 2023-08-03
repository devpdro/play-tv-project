import styled from "styled-components";

export const Screen = styled.header`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Container = styled.header`
  display: flex;
  justify-content: center;

  margin-top: 9rem;
`;

export const Title = styled.div`
  h2 {
    text-align: left;
    font-size: 1.5rem;
  }
  div {
    h1 {
      font-size: 4rem;
      margin-top: 0;
      padding-right: 4rem;
      text-align: justify;
      font-weight: 900;
      span {
        margin-top: -40px;
        display: block;
      }
    }
  }
`;

export const Image = styled.div`
  img {
    border: 1px solid red;
    width: 100%;
    height: 50vh;
  }
`;
