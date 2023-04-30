import './App.css'
import { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import FindMonkey from './pages/FindMonkey';
import ResetButton from './components/ResetButton';
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {
  const [correct, setCorrect] = useState(5);  // 임시로 초기값 5로 해둠 

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FindMonkey correct={correct} setCorrect={setCorrect} />
      <ResetButton setCorrect={setCorrect}/>
    </ThemeProvider>
  )
}

export default App


