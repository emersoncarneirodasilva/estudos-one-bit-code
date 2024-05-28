import styled from "styled-components";

export const ContainerStyled = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
`;

export const ButtonStyled = styled.button`
  font-size: 20px;
  margin-top: 40px;
  padding: 10px;
  border-radius: 5px;
  border: ${({ theme }) => theme.buttons.buttonBuyBorder};
  color: ${({ theme }) => theme.buttons.buttonBuyText};
  background-color: ${({ theme }) => theme.buttons.buttonBuyBackground};
  transition: all 0.2s ease-in;

  &:hover {
    color: #ff0044;
    background-color: #bbbbbb;
  }
`;

export const ButtonStyledBorder = styled(ButtonStyled).attrs({
  type: "submit",
})`
  margin-left: 30px;
  border: ${({ theme }) => theme.buttons.buttonSellBorder};
  color: ${({ theme }) => theme.buttons.buttonSellText};
  background-color: ${({ theme }) => theme.buttons.buttonSellBackground};
`;
