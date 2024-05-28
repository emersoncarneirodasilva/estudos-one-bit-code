/* eslint-disable react/prop-types */
import { Container, Logo, NavContainer, NavItem, ChangeTheme } from "./styles";

export default function Header({ actualTheme, changeTheme }) {
  return (
    <Container>
      <Logo themeImage={actualTheme.title} />
      <NavContainer>
        <ChangeTheme themeImage={actualTheme.title} onClick={changeTheme} />
        <NavItem>Início</NavItem>
        <NavItem>Contatos</NavItem>
        <NavItem>Sobre nós</NavItem>
      </NavContainer>
    </Container>
  );
}
