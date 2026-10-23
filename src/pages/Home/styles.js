import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0d1316;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 834px) {
    justify-content: center;
    gap: 30px;
  }

  @media (min-width: 390px) {
    overflow-y: auto;
    padding: 20px;
    gap: 20px;
  }

  img {
    width: 240px;
    margin: -30px 0 -50px 0;
  }
`;

export const Title = styled.h1`
  span {
    color: #17fb8d;
    font-size: 20px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  color: #f1f5f9;
  font-size: 50px;
  text-align: center;
  font-weight: 800;
  line-height: 0.9;
  margin-bottom: -15px;
`;

export const SubTitle = styled.p`
  color: #8fa3b8;
  text-align: center;
  font-size: 15px;
`;

export const Form = styled.form`
  color: #101719;
  border: 2px solid #17fb8d;
  box-shadow:
    0 0 8px rgba(23, 251, 141, 0.16),
    0 0 30px rgba(23, 251, 141, 0.05);
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  gap: 20px;

  @media (min-width: 390px) {
    padding: 20px;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const InputLabel = styled.label`
  color: #f1f5f9;
  font-size: 12px;
  font-weight: 500;

  span {
    color: #ff0000;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #344955;
  background-color: #172329;
  padding: 12px 20px;
  outline: none;
  width: 100%;
  color: #f1f5f9;
`;

export const Notification = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 1000;

  max-width: calc(100vw - 48px);
  padding: 16px 20px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;

  background-color: ${({ $type }) =>
    $type === "success" ? "#12352A" : "#3B171B"};

  color: ${({ $type }) => ($type === "success" ? "#86EFAC" : "#FCA5A5")};

  border: 1px solid
    ${({ $type }) => ($type === "success" ? "#22C55E" : "#EF4444")};

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);

  animation: notificationIn 0.3s ease-out;

  @keyframes notificationIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    top: 16px;
    right: 16px;
    left: 16px;
    max-width: none;
  }
`;
