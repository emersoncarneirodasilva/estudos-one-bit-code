import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 40px 50px;
  border-bottom: 1px solid #bbbbbb;
`;

export const Logo = styled.img.attrs((props) => ({
  src:
    props.themeImage === "light" ? "./img/logoLight.png" : "./img/logoDark.png",
  alt: "Logo OneBitCode",
}))`
  width: 150px;
`;

export const NavContainer = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    color: #ff0044;
  }
`;

export const ChangeTheme = styled.img.attrs((props) => ({
  src: props.themeImage === "light" ? "./img/moon.png" : "./img/sun.png",
  alt: "Ícone lua/sol",
}))`
  width: 28px;
  cursor: pointer;
`;
