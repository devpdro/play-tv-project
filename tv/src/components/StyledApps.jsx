import styled from "styled-components";

export const Screen = styled.section`
  max-width: ${({ theme }) => theme.width.maxApp};
  margin: 0rem auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 1.2rem 0.9rem;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: scroll;
`;

export const BoxImg = styled.div`
  max-width: ${({ theme }) => theme.width.maxShow};
`;

export const Img = styled.img`
  width: 287px;
  height: 340px;
  object-fit: cover;
  gap: 20px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ImgList = styled.img`
  width: 300px;
  height: 270px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
