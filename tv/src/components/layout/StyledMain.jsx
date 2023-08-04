import styled from "styled-components";

export const Container = styled.section`
  padding: 0 2rem;
  max-width: ${({ theme }) => theme.width.maxShow};
  overflow-y: none;
  overflow-x: hidden;
  max-height: 450px;
  background-color: ${({ theme }) => theme.colors.gradientBackground};
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: scroll;
`;

export const ImgSize = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 1.5rem 1rem 1.1rem 1rem;
  gap: 20px;
`;
