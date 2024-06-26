import styled from "styled-components";
import transition from "../assets/transicao-2.png";
import barraInferior from "../assets/barra-inferior.png";
import arrowBlack from "../assets/arrow-down-black.png";
import MethodCard from "./Common/MethodCard";

export default function Method() {
  return (
    <ContainerMethod id="method">
      <ContainerTransition>
        <img src={transition} />
      </ContainerTransition>
      <ContainerArrow>
        <a href="#objective">
          <img src={arrowBlack} />
        </a>
      </ContainerArrow>
      <BottonBar>
        <img src={barraInferior} />
      </BottonBar>
      <ContainerTitle>
        <h1>O próximo passo para o sucesso do seu</h1>
        <h2>
          Projeto<span> .</span>
        </h2>
      </ContainerTitle>
      <ContainerText>
        <p>
          Vamos avaliar o que chamamos de
          <br />
          <b>Os 4 Pilares da Marca de Entretenimento de Alto Impacto.</b>
        </p>
      </ContainerText>
      <MethodCard
        item="o1."
        title="Posiciona
        mento"
        text="Começaremos nossa jornada definindo a proposta de valor do seu
          projeto / evento que o torna irresistível e único."
      ></MethodCard>
      <MethodCard
        item="o2."
        title="Público"
        text="Nesta fase, iremos mapear quais públicos de interesse terão
          maiores chances de serem atraídos por sua proposta de valor."
      ></MethodCard>
      <MethodCard
        item="o3."
        title="Conteúdo"
        text="Iremos definir as estratégias de funis de conteúdos para que os
          públicos de interesse possam caminhar previsivelmente na jornada até o
          fechamento dos negócios."
      ></MethodCard>
      <MethodCard
        item="o4."
        title="Métrica do Sucesso"
        text="Nesta fase, definiremos quais são as
          métricas de sucesso do seu projeto para que
          os negócios possam
          ser escaláveis, lucrativos e verdadeiramente de alto impacto."
      ></MethodCard>
      <ContainerButton>
        <button>Agendar Sessão Gratuita</button>
      </ContainerButton>
      <BottonBar>
        <img src={barraInferior} />
      </BottonBar>
    </ContainerMethod>
  );
}

const ContainerMethod = styled.div`
  min-height: 720px;
  box-sizing: border-box;
  padding-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 55px;
  background-color: ${(props) => props.theme.colors["gray-950"]};
  position: relative;
`;

const ContainerTransition = styled.div`
  position: absolute;
  top: -1px;
  left: 0;
  img {
    width: 100vw;
  }

  @media (min-width: 1024px) {
    display: none;
  }
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

const BottonBar = styled.div`
  margin-top: 82px;
  img {
    width: 100%;
  }
`;

const ContainerTitle = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  margin-bottom: 12px;
  letter-spacing: -5;
  text-align: center;
  h1 {
    font-size: 26px;
    font-weight: normal;
    width: 100%;
    color: ${(props) => props.theme.colors["white"]};
    font-family: "montserrat", sans-serif;
    line-height: 25px;
  }
  h2 {
    background: ${(props) => props.theme.colors["gradient-1"]};
    color: transparent;
    font-family: "Druk Wide Bold", sans-serif;
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 46px;
    line-height: 80px;
  }
  span {
    color: ${(props) => props.theme.colors["white"]};
  }
`;

const ContainerText = styled.div`
  margin-bottom: 20px;
  p {
    color: ${(props) => props.theme.colors["white"]};
    font-family: "montserrat", sans-serif;
    font-size: 14px;
    max-width: 350px;
    margin: 0 auto;
    letter-spacing: -3%;
    font-weight: 300;
    padding: 12px;
    line-height: 22px;
    text-align: center;
  }
  b {
    font-weight: 700;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
  margin-bottom: -42px;
  button {
    padding: 12px;
    border-radius: 8px;
    background: ${(props) => props.theme.colors["gradient-1"]};
    font-family: "Montserrat", sans-serif;
    color: ${(props) => props.theme.colors["white"]};
    letter-spacing: -5%;
    text-align: center;
    border: none;
    font-weight: bold;
    width: 100%;
    max-width: 200px;
    cursor: pointer;
  }
`;
