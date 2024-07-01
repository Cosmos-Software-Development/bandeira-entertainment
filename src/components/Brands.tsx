import styled from "styled-components";
import transition1 from "../assets/transicao-1.png";
import CulturaInglesa from "../assets/Festial-Cultura-Inglesa.png";
import StartSe from "../assets/Start-Se.png";
import CoquetelMolotov from "../assets/Coquetel-Molotov.png";
import DoceMaravilha from "../assets/Doce-Maravilha .png";
import arrowBlack from "../assets/arrow-down-black.png";
export default function Brands() {
  return (
    <ContainerBrands id="brands">
      <ContainerTransition>
        <img src={transition1} />
      </ContainerTransition>
      <ContainerArrow>
        <a href="#method">
          <img src={arrowBlack} />
        </a>
      </ContainerArrow>
      <ContainerTitle>
        <p>
          Marcas com as quais nosso método
          <br />
          já conseguiu fechar
        </p>
        <h1>
          negócios <span>.</span>
        </h1>
      </ContainerTitle>
      <ContainerImage>
        <img src={CulturaInglesa} />
        <img src={StartSe} />
        <img src={CoquetelMolotov} />
        <img src={DoceMaravilha} />
      </ContainerImage>
      <ContainerButton>
        <button>Agendar Sessão Gratuita</button>
      </ContainerButton>
    </ContainerBrands>
  );
}

const ContainerBrands = styled.div`
  min-height: 620px;
  box-sizing: border-box;
  padding-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
  background-color: ${(props) => props.theme.colors["gray-100"]};
  position: relative;
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

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-contet: cente;
  align-itens: center;
  text-align: center;
  letter-spacing: -0.05em;
  p {
    font-family: Montserrat;
    padding-top: 50px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 20px;
    font-weight: 300;
    line-height: 22px;
    margin-left: 30px;
    margin-right: 30px;
    color: ${(props) => props.theme.colors["gray-650"]};
  }
  h1 {
    font-family: Druk Wide Bold;
    padding: 0 15px;
    font-size: 38px;
    font-weight: 900;
    line-height: 80px;
    color: ${(props) => props.theme.colors["gray-600"]};
  }
  span {
    font-family: "Montserrat", sans-serif;
  }
`;

const ContainerImage = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
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