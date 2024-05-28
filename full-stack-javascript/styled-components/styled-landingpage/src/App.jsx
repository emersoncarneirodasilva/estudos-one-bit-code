import { useState } from "react";
import Header from "./components/Header";
import GlobalStyle from "./global/styles/global";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./global/styles/theme";
import ProductPage from "./components/ProductPages";

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const handleChangeTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header actualTheme={theme} changeTheme={handleChangeTheme} />
      <ProductPage />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
