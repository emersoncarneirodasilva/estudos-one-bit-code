import { useState } from "react";
import Title from "../Title";
import { ButtonStyled, ButtonStyledBorder, ContainerStyled } from "./styles";

// eslint-disable-next-line react/prop-types
function Container({ changeTheme }) {
  const [change, setChange] = useState(false);

  return (
    <ContainerStyled>
      <Title changeColor={change} />
      <ButtonStyled onClick={changeTheme}>Mudar Tema</ButtonStyled>
      <ButtonStyledBorder onClick={() => setChange(!change)}>
        Mudar Título
      </ButtonStyledBorder>
    </ContainerStyled>
  );
}

export default Container;
