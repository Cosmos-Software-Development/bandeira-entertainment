import styled from "styled-components";
import instaIcon from "../assets/instagram-icon.png";
import whatsappIcon from "../assets/whatsapp-icon-small.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import logo from "../assets/bandeira-logo.png";

export default function Footer() {
  return (
    <ContainerFooter>
      <Container>
        <ContainerSocial>
          <p>Acompanhe em</p>
          <ContainerIcons>
            <a
              href="https://www.instagram.com/bandeiraentretenimento/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaIcon} />
            </a>
            <a
              href="https://wa.me/5584998278054"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsappIcon} />
            </a>
            <img src={linkedinIcon} />
          </ContainerIcons>
        </ContainerSocial>
        <ContainerLinks>
          <a href="#home">O PROGRAMA</a>
          <a href="#brands">AS MARCAS</a>
          <a href="#method">NOSSO MÉTODO</a>
          <a href="#objective">OBJETIVO</a>
          <a href="#investment">AGENDAMENTO</a>
          <a href="#faq">FAQ</a>
        </ContainerLinks>
        <ContainerLogo>
          <img src={logo} />
        </ContainerLogo>
      </Container>
      <ContainerCopy>
        <p>Copyright © 2024. Bandeira Entretenimento</p>
        <p>Todos os direitos reservados. CNPJ: 30.798.660/0001-20</p>
      </ContainerCopy>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.div`
  padding-top: 54px;
  padding-left: 25px;
  padding-right: 20px;
  padding-bottom: 32px;
  background: ${(props) => props.theme.colors["gradient-7"]};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
  }
`;

const ContainerSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    letter-spacing: -3%;
    color: ${(props) => props.theme.colors["white"]};
    font-size: 14px;
  }
`;

const ContainerIcons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  img {
    width: 30px;
  }
`;

const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 52px;
  a {
    font-family: "Montserrat", sans-serif;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.colors["white"]};
  }
`;

const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
  img {
    width: 132px;
  }
`;

const ContainerCopy = styled.div`
  margin-top: 42px;
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
    color: ${(props) => props.theme.colors["white"]};
    letter-spacing: -3%;
    font-weight: 300;
    text-align: center;
  }

  p:first-child {
    font-weight: 700;
  }
`;
