import styled from "styled-components";
import transition1 from "../assets/transicao-1.png";
import ItemList from "./Common/ItemList";
import arrowWhite from "../assets/arrow-down-white.png";
import barraInferior from "../assets/barra-inferior.png";

export default function Price() {
  return (
    <InvestmentContainer id="investment">
      <ContainerTransition>
        <img src={transition1} />
      </ContainerTransition>
      <ContainerArrow>
        <a href="#faq">
          <img src={arrowWhite} />
        </a>
      </ContainerArrow>
      <BottonBar>
        <img src={barraInferior} />
      </BottonBar>
      <ContainerTitle>
        <h1>
          O que você terá acesso <br /> na Sessão
        </h1>
        <h2>
          estratégica <span>.</span>
        </h2>
      </ContainerTitle>
      <ContainerList>
        <ItemList>
          Sessão <span>100% On-line e 100% individual</span>
        </ItemList>
        <ItemList>
          Análise da <span>Estratégia de Marketing</span> do seu Projeto
        </ItemList>
        <ItemList>
          Identificação das <span>Oportunidades de Negócios</span>
        </ItemList>
        <ItemList>
          <span>Plano Direcional</span> de Melhorias
        </ItemList>
      </ContainerList>
      <ContainerButton>
        <button>Agendar Sessão Gratuita</button>
      </ContainerButton>
      <BottonBar>
        <img src={barraInferior} />
      </BottonBar>
    </InvestmentContainer>
  );
}

const InvestmentContainer = styled.div`
  min-height: 620px;
  box-sizing: border-box;
  padding-top: 84px;
  padding-left: 25px;
  padding-right: 20px;
  padding-bottom: 25px;
  background-color: ${(props) => props.theme.colors["gray-950"]};
  position: relative;
`;

const ContainerArrow = styled.div`
  position: absolute;
  top: 18px;
  left: 0;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  img {
    width: 30px;
    margin-left: -2px;
    transform: rotate(90deg);
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
const ContainerTransition = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  img {
    width: 100vw;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

const ContainerList = styled.div`
  padding: 20px;
  margin-top: 56px;
  margin-bottom: 56px;
  display: flex;
  width: fit-content;
  flex-direction: column;
  gap: 7px;

  @media (min-width: 1024px) {
    margin: 0 auto;
    width: fit-content;
    margin-top: 56px;
    margin-bottom: 56px;
  }
`;
const BottonBar = styled.div`
  padding-right: 10px;
  img {
    margin-top: 12px;
    width: 100%;
  }
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  text-align: center;
  font-family: "Montserrat", sans-serif;

  h1 {
    font-style: normal;
    font-weight: 200;
    font-size: 22px;
    text-align: center;
    letter-spacing: -0.04em;
    color: ${(props) => props.theme.colors["white"]};
    margin-top: 25px;
  }
  h2 {
    background: ${(props) => props.theme.colors["gradient-1"]};
    font-family: Druk Wide Bold;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 36px;
    letter-spacing: -0.04em;
    width: 100%;
    margin: 0;
    line-height: 60px;
  }
  span {
    font-size: 36px;
    font-family: "Montserrat", sans-serif;
  }
`;
const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 36px;
  position: relative;
  img {
    width: 52px;
    position: absolute;
    right: 0;
  }
  button {
    border-radius: 8px;
    background: ${(props) => props.theme.colors["gradient-1"]};
    font-family: "Montserrat", sans-serif;
    color: ${(props) => props.theme.colors["white"]};
    letter-spacing: -5%;
    border: none;
    width: 100%;
    cursor: pointer;
    max-width: 280px;
    font-style: normal;
    font-weight: 700;
    line-height: 39.01px;
  }
  p {
    margin-top: 5px;
    color: ${(props) => props.theme.colors["white"]};
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 36.57px;
    letter-spacing: -0.05em;
    text-align: center;
  }
  @media (min-width: 1024px) {
    p {
      font-size: 15px;
    }
  }
`;