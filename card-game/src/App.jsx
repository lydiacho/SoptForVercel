import './App.css'
import styled, { ThemeProvider } from "styled-components";
import FindMonkey from './pages/FindMonkey';
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FindMonkey />
    </ThemeProvider>
  )
}

export default App


