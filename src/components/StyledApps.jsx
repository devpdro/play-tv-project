import styled from "styled-components";

export const Screen = styled.section`
  max-width: ${({ theme }) => theme.width.maxApp};
  margin: 3rem auto;
  @media (max-width: 1380px) {
    margin: 3rem 2rem !important;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  padding: 1.2rem 0rem;
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 0 auto;
  }
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
  @media (max-width: 800px) {
    margin: 1.2rem 0;
  }
`;

export const ImgList = styled.img`
  width: 280px;
  object-fit: cover;
  height: 340px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
