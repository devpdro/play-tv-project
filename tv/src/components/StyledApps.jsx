import styled from "styled-components";

export const Screen = styled.section`
  max-width: ${({ theme }) => theme.width.maxApp};
  margin: 5rem auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const BoxImg = styled.div`
  max-width: ${({ theme }) => theme.width.maxShow};
  margin: 0 auto;
`;

export const Img = styled.img`
  margin-top: 5rem;
  width: 287px;
  height: 340px;
  object-fit: cover;
  cursor: pointer;
`;
