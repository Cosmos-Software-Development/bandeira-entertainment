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
        <h1>
          O próximo passo para
          <br /> o sucesso do seu
        </h1>
        <h2>
          projeto<span> .</span>
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
        title="Métrica do
        Sucesso"
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
  font-family: "Montserrat", sans-serif;
  h1 {
    font-size: 22px;
    font-weight: normal;
    width: 100%;
    color: ${(props) => props.theme.colors["white"]};
    line-height: 25px;
  }
  h2 {
    background: ${(props) => props.theme.colors["gradient-1"]};
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 38px;
    font-family: Druk Wide Bold;
    font-weight: 900;
    line-height: 80px;
  }
  span {
    font-family: "Montserrat", sans-serif;
    color: ${(props) => props.theme.colors["gray-600"]};
    font-weight: 900;
  }
`;

const ContainerText = styled.div`
  margin-bottom: 20px;
  p {
    color: ${(props) => props.theme.colors["gray-600"]};
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
    font-family: Montserrat;
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