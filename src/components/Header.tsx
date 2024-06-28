import styled from "styled-components";
import bg from "../assets/Bg2.png";
import barraInferior from "../assets/barra-inferior.png";
import star from "../assets/estrela.png";
import initialLogo from "../assets/logo-initial.png";

export default function Header() {
  return (
    <HeaderContainer id="home">
      <TopBar>
        <p>
          Metodologia Exclusiva para <strong>Produtores Culturais</strong>
        </p>
      </TopBar>
      <HeaderLogoContainer>
        <BottonBar>
          <img src={barraInferior} />
        </BottonBar>
        <ContainerTitle>
          <img src={initialLogo} />
        </ContainerTitle>
        <ContainerStar>
          <img src={star} />
        </ContainerStar>
        <ContainerContent>
          <p>
            Agende uma vaga na Sessão Estratégica conosco e descubra o &nbsp;
            <b>
              Segredo do Plano de Marketing das Marcas de Entretenimento de Alto
              Impacto.
            </b>
          </p>
        </ContainerContent>
        <ContainerButton>
          <button>Agendar Sessão Gratuita</button>
          <img src={star} />
          <p>As vagas são limitadas</p>
        </ContainerButton>
        <BottonBar>
          <img src={barraInferior} />
        </BottonBar>
      </HeaderLogoContainer>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div``;

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  background: ${(props) => props.theme.colors["gradient-1"]};
  p {
    padding-top: 4px;
    font-size: 12px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    letter-spacing: -0.01em;
    color: ${(props) => props.theme.colors["white"]};
    strong {
      font-weight: 600;
      font-size: 11px;
    }
  }
`;
const HeaderLogoContainer = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 80% 0;
  padding-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 55px;

  @media (min-width: 1024px) {
    background-position: center;
    background-image: none;
  }
`;
const BottonBar = styled.div`
  margin-top: 12px;
  img {
    width: 100%;
  }
`;

const ContainerTitle = styled.div`
  img {
    width: 100%;
  }
  @media (min-width: 1024px) {
    img {
      height: 500px;
    }
  }
`;

const ContainerStar = styled.div`
  height: 100px;
  img {
    width: 52px;
  }
`;

const ContainerContent = styled.div`
  p {
    font-family: "Montserrat", sans-serif;
    color: ${(props) => props.theme.colors["white"]};
    letter-spacing: -3%;
    margin-bottom: 12px;
    text-align: center;
    font-size: 14px;
    font-style: normal;
  }
  b {
    font-weight: 600;
  }
  @media (min-width: 1024px) {
    p {
      margin: 5px;
      font-size: 26px;
    }
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
    bottom: 10px;
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
