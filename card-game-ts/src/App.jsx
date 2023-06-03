import { ThemeProvider } from "styled-components";
import FindMonkey from './pages/findMonkey';
import ResetButton from './components/ResetButton';
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";
import { useRecoilState } from "recoil";
import { correctState } from './recoil/atom';

function App() {
  const [correct, setCorrect] = useRecoilState(correctState); 

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FindMonkey correct={correct} setCorrect={setCorrect} />
      <ResetButton setCorrect={setCorrect}/>
    </ThemeProvider>
  )
}

export default App


