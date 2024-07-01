import styled from "styled-components";
import objectiveThumb from "../assets/objective-thumb.png";

export default function Objective() {
  return (
    <ContainerObjective id="objective">
      <ContainerTitle>
        <h2>
          Uma comunidade
          <br />
          com um só
        </h2>
        <h1>
          {" "}
          objetivo <span>:</span>
        </h1>
        <h2>Fazer a sua marca crescer!</h2>
      </ContainerTitle>
      <ContainerImage>
        <img src={objectiveThumb} />
      </ContainerImage>

      <ContainerText>
        Nosso objetivo é impulsionar a sua marca, pequeno e médio produtor de
        entretenimento, posicionando-a no radar das grandes oportunidades da
        produção cultural! E o começo para essa jornada é a
        <b> Sessão Estratégica </b>
        personalizada conosco.
      </ContainerText>
      <ContainerText>
        Nesta sessão, vamos compreender os <b>desafios de marketing</b> que você
        enfrenta, desde a captação de recursos até a execução do produto de
        entretenimento, com o propósito de identificar novas oportunidades de
        fechamento de negócios.
      </ContainerText>
      <ContainerText>
        Estamos comprometidos em ajudar sua marca a começar a jogar o
        <b> Jogo do Alto Impacto</b> e atingir seu máximo potencial de
        conquistar resultados excepcionais.
      </ContainerText>
      <ContainerButton>
        <button>Agendar Sessão Gratuita</button>
      </ContainerButton>
    </ContainerObjective>
  );
}

const ContainerObjective = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  background: ${(props) => props.theme.colors["gradient-6"]};
  width: 100%;
  gap: 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
`;
const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  text-align: center;
  color: ${(props) => props.theme.colors["white"]};
  font-family: "Montserrat", sans-serif;
  h2:first-child {
    margin-top: 80px;
  }
  h2 {
    font-size: 24px;
    font-weight: 200;
    line-height: 28px;
  }
  h1 {
    font-size: 38px;
    font-weight: 700;
    line-height: 80px;
    font-family: Druk Wide Bold;
    text-align: center;
    padding: 5px 40px;
  }
  span {
    font-family: "Montserrat", sans-serif;
  }
  @media (max-width: 360px) {
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 20px;
    }
  }
`;
const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-itens: center;
  width: 100%;
  img {
    width: 100%;
  }
`;

const ContainerText = styled.div`
  align-items: center;
  justify-content: center;
  margin: 0 30px;
  margin-bottom: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  letter-spacing: 0.03em;
  line-height: 20px;
  color: ${(props) => props.theme.colors["white"]};
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
    background: transparent;
    font-family: "Montserrat", sans-serif;
    color: ${(props) => props.theme.colors["white"]};
    letter-spacing: -5%;
    border: none;
    width: 100%;
    cursor: pointer;
    max-width: 280px;
    max-height: 41px;
    font-style: normal;
    font-weight: 700;
    line-height: 39.01px;
    border: 1px solid ${(props) => props.theme.colors["white"]};
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
