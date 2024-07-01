import styled from "styled-components";
import whatsappIcon from "../assets/whatsapp-icon.png";
import emailIcon from "../assets/email-icon.png";
import ContactCard from "./Common/ContactCard";
import Redirect from "../utils/Redirect";

const contactData = [
  {
    image: whatsappIcon,
    title: "Atendimento pelo Whatsapp",
    subtitle: "Dúvidas sobre sua Sessão",
    contactList: ["(84) 9 9827 8054"],
  },
  {
    image: emailIcon,
    title: "Atendimento pelo E-mail",
    subtitle: "Dúvidas sobre sua Sessão",
    contactList: ["suporte@bandeiraentretenimento.com.br"],
  },
];

export default function Contact() {
  return (
    <ContactContainer id="contato">
      <ContainerTitle>
        <h1>Ainda com dúvidas?</h1>
        <p>Fale com nosso time</p>
      </ContainerTitle>
      <ContainerCardContact>
        {contactData.map((c) => (
          <ContactCard
            contactList={c.contactList}
            image={c.image}
            subtitle={c.subtitle}
            title={c.title}
            key={c.title}
          />
        ))}
      </ContainerCardContact>
      <ContainerButton>
        <button onClick={Redirect}>Agendar Sessão Gratuita</button>
      </ContainerButton>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  min-height: 950px;
  box-sizing: border-box;
  padding-top: 55px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
  background-color: ${(props) => props.theme.colors["gray-950"]};
  @media (min-width: 1024px) {
    min-height: 650px;
  }
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  h1 {
    font-family: "montserrat", sans-serif;
    background: ${(props) => props.theme.colors["gradient-1"]};
    color: transparent;
    font-weight: bold;
    width: fit-content;
    font-size: 24px;
    background-clip: text;
    -webkit-background-clip: text;
    max-width: 340px;
    width: 100%;
  }
  p {
    font-family: "montserrat", sans-serif;
    color: ${(props) => props.theme.colors["white"]};
    font-size: 18px;
    max-width: 340px;
    width: 100%;
  }
`;

const ContainerCardContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  gap: 42px;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
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
