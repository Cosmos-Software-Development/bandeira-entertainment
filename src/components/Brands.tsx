import styled from "styled-components";
import transition1 from "../assets/transicao-1.png";
import rectangle from "../assets/Rectangle.jpg";
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
        <h1> negócios .</h1>
      </ContainerTitle>
      <ContainerImage>
        <img src={rectangle} />
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
    padding-top: 50px;
    padding-left: 15px;
    padding-right: 15px;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 300;
    line-height: 30px;
    margin-left: 30px;
    margin-right: 30px;
    color: ${props => props.theme.colors['gray-650']};
  }
  h1 {
    padding: 0 15px;
    font-family: Druk Wide Bold;
    font-size: 40px;
    font-weight: 600;
    line-height: 70px;
    color: ${props => props.theme.colors['gray-600']};
  }
`;

const ContainerImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    max-width: 420px;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
  button {
    padding: 12px;
    border-radius: 8px;
    background: ${(props) => props.theme.colors["gradient-1"]};
    font-family: "Montserrat", sans-serif;
    color: ${(props) => props.theme.colors["white"]};
    letter-spacing: -5%;
    text-align: center;
    border: none;
    font-weight: 700;
    width: 100%;
    max-width: 200px;
    cursor: pointer;
  }
`;
