import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/defaultTheme";
import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/Header";
import Manifesto from "./components/Manifesto";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ContainerApp>
        <Header />
        <Manifesto />
      </ContainerApp>
    </ThemeProvider>
    
  )
}

const ContainerApp = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors['gray-900']};
`

export default App
