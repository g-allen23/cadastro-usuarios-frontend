import styled from "styled-components";

export const Button = styled.button`
  width: ${({ $mobileSmall }) =>
      $mobileSmall ? "200px" : "100%"};
  background-color: ${(props) =>
    props.theme === "primary" ? "#17fb8d" : "transparent"};
  color: ${(props) => (props.theme === "primary" ? "#101719" : "#17fb8d")};
  box-shadow:
    0 0 8px rgba(12, 250, 135, 0.16),
    0 0 30px rgba(4, 255, 134, 0.05);
  font-weight: 800;
  font-size: 14px;
  border: ${(props) =>
    props.theme === "primary" ? "none" : "1px solid #17fb8d"};
  border-radius: 10px;
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  letter-spacing: 1px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media (max-width: 390px) {
    width: ${({ $mobileSmall }) =>
      $mobileSmall ? "200px" : "100%"};
  }
`;
