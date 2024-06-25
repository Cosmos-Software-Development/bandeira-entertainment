import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/defaultTheme";
import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/Header";
import Brands from "./components/Brands";
import ManifestoMaior from "./components/ManifestoMaior";
import Modulos from "./components/Modulos";
import Carousel from "./components/Carousel";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Bonus from "./components/Bonus";
import Price from "./components/Price";
import Footer from "./components/Footer";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ContainerApp>
        <Header />
        <Brands />
        <ManifestoMaior />
        <Modulos />
        <Carousel />
        <Bonus />
        <Price />
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
