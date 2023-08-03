import styled from "styled-components";

export const Screen = styled.header`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Container = styled.header`
  display: grid;
  place-items: center;
  margin-top: 9rem;
`;

export const Title = styled.div`
  h2 {
    text-align: center;
    font-size: 1.5rem;
  }
  div {
    h1 {
      font-size: 5rem;
      margin-top: 0;
      text-align: center;
      font-weight: 900;

      span {
        margin-top: -40px;
        display: block;
      }
    }
  }
`;

export const Image = styled.div`

  width: 100%;
  img {
    border: 1px solid red;
    width: 100%;
    height: 50vh;
  }
`;
