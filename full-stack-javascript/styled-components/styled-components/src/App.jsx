import Container from "./components/Container";
import GlobalStyle from "./global/styles/global";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./global/styles/theme";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const handleChangeTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container changeTheme={handleChangeTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
