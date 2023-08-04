import styled from "styled-components";

export const Screen = styled.section`
  max-width: ${({ theme }) => theme.width.maxApp};
  margin: 5rem auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  transition: transform 0.3s ease-in-out;
  object-fit: cover;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;