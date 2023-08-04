import styled from "styled-components";

export const Container = styled.section`
  max-width: ${({ theme }) => theme.width.max};
  margin: 0 auto;
  overflow-y: none;
  overflow-x: hidden;
  max-height: 450px;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: scroll;
`;

export const ImgSize = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
`;
