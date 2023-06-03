import { ThemeProvider } from "styled-components";
import FindMonkey from './pages/findMonkey';
import ResetButton from './components/ResetButton';
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";
import { RecoilRoot } from "recoil";


function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FindMonkey />
        <ResetButton />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App


