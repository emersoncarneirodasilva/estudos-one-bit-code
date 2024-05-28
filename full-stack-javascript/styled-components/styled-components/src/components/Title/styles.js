import styled from "styled-components";

export const TitleStyled = styled.h1`
  text-align: center;
  font-size: 40px;
  padding-top: 40px;
  color: ${(props) => (props.isOn === false ? "#bbbbbb" : "#e43030")};
  transition: all 0.2s ease;
`;

export const ParagraphStyled = styled.p`
  text-align: center;
  font-size: 20px;
  padding: 20px 100px;
`;
