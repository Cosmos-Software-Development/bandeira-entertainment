import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/defaultTheme";
import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/Header";
import Brands from "./components/Brands";
import Method from "./components/Method";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Objective from "./components/Objective";
import Investment from "./components/Investment";
import Footer from "./components/Footer";


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ContainerApp>
        <Header />
        <Brands />
        <Method />
        <Objective/>
        <Investment/>
        <Faq />
        <Contact />
        <Footer />
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
