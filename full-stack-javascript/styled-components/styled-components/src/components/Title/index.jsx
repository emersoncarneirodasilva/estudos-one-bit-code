import { ParagraphStyled, TitleStyled } from "./styles";

// eslint-disable-next-line react/prop-types
function Title({ changeColor }) {
  return (
    <>
      <TitleStyled isOn={changeColor}>Styled Components</TitleStyled>
      <ParagraphStyled>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta
        aliquam reiciendis corporis consequatur nostrum nesciunt, veniam tempore
        delectus laudantium beatae alias aut nobis sed molestiae quo provident
        ipsa esse!
      </ParagraphStyled>
    </>
  );
}

export default Title;
