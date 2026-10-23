import styled from "styled-components";

export const Container = styled.div`
  background-color: #0d1316;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;

  @media (min-width: 834px) {
    justify-content: center;
    gap: 30px;
  }

  @media (min-width: 390px) {
    overflow-y: auto;
  }
`;

export const ImgList = styled.img`
  width: 250px;
  margin: -30px 0;
`;

export const Title = styled.h2`
  span {
    color: #17fb8d;
    font-size: 20px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: -10px;
  }
  color: #f1f5f9;
  font-size: 50px;
  text-align: center;
  font-weight: 800;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const CardUsers = styled.div`
  background-color: #101719;
  padding: 16px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-width: 400px;
  border: 1px solid #17fb8d;
  box-shadow:
    0 0 8px rgba(23, 251, 141, 0.16),
    0 0 30px rgba(23, 251, 141, 0.05);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow:
      0 0 8px rgba(23, 251, 141, 0.59),
      0 0 30px rgba(23, 251, 141, 0.57);
  }

  h3 {
    color: #f1f5f9;
    font-size: 20px;
    font-weight: 600;
    text-align: start;
    margin-bottom: 3px;
    text-transform: capitalize;
  }

  p {
    color: #f1f5f9;
    font-size: 14px;
    font-weight: 200;
    text-align: start;
  }
`;

export const AvatarUser = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const TrashIcon = styled.img`
  width: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: translateY(1px);
  }
`;
