import styled from "styled-components";

export const Container = styled.section`
  padding: 0 2rem;
  max-width: ${({ theme }) => theme.width.maxShow};
  margin: 0 auto;
  overflow-y: none;
  overflow-x: hidden;
  max-height: 450px;
  ::-webkit-scrollbar {
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #0a0a0a;
  }
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: scroll;
`;

export const ImgSize = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;
