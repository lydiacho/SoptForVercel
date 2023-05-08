import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default App;

