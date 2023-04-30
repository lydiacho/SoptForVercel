import './App.css'
import { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import FindMonkey from './pages/FindMonkey';
import ResetButton from './components/ResetButton';
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {
  const [all, setAll] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FindMonkey all={all} setAll={setAll} />
      <ResetButton setAll={setAll}/>
    </ThemeProvider>
  )
}

export default App


