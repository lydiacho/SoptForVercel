import { ThemeProvider } from "styled-components";
import FindMonkey from './pages/findMonkey';
import ResetButton from './components/ResetButton';
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FindMonkey />
      <ResetButton />
    </ThemeProvider>
  )
}

export default App


