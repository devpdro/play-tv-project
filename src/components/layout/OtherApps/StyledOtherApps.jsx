import styled from "styled-components";

export const Screen = styled.section`
  max-width: ${({ theme }) => theme.width.maxShow};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

export const Img = styled.img`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;
