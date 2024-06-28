import styled from "styled-components";
import seta from "../assets/seta.png";
import Accordion from "./Common/Accordion";

export default function Faq() {
  return (
    <FaqContainer id="faq">
      <ContainerTitle>
        <h1>FAQ</h1>
        <span>
          <strong>Dúvidas</strong>
          <br />
          Frequentes
        </span>
      </ContainerTitle>
      <ContainerAccordion>
        <Accordion
          image={seta}
          body="Em 30 min, nós faremos (você e um de nossos consultores) um diagnóstico do seu produto de entretenimento e te mostraremos o caminho perfeito para que você tenha uma marca de alto impacto no cenário do entretenimento. 
"
          title="Caso eu seja selecionado, o que terei acesso nessa Sessão Estratégica?"
        />
        <Accordion
          image={seta}
          body="A Sessão Estratégica com um de nossos consultores terá duração de 30 minutos e acontecerá através de vídeo chamada."
          title="Como funcionará a Sessão Estratégica para os projetos selecionados?"
        />
        <Accordion
          image={seta}
          body="Não. Os projetos de entretenimento passarão pela análise de nossos analistas e selecionaremos os projetos que realmente estejam preparados para começar a jogar o “Jogo das Marcas de Alto Impacto”."
          title="Se eu aplicar meu projeto de entretenimento para uma Sessão Estratégica, é garantido eu ser selecionado(a)?"
        />
        <Accordion
          image={seta}
          body="Não. Nossa pegada é construir marcas de produtos de entretenimento que sejam monstros no mercado. Somos uma agência de marketing que decidiu ser uma comunidade pra construir, junta ao pequeno e médio produtor, marcas comercialmente atraentes do público certo, esteja ele na multidão ou na mesa de investidores."
          title="A Bandeira Entretenimento é uma Captadora de Recursos e de Patrocínios?"
        />
      </ContainerAccordion>
    </FaqContainer>
  );
}

const FaqContainer = styled.div`
  min-height: 520px;
  box-sizing: border-box;
  padding-top: 62px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 32px;
  background-color: ${(props) => props.theme.colors["gray-950"]};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  h1 {
    width: fit-content;
    background: ${(props) => props.theme.colors["gradient-1"]};
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-family: "Druk Wide Bold", sans-serif;
    font-size: 44px;
  }
  span {
    color: ${(props) => props.theme.colors["white"]};
    font-family: "montserrat", sans-serif;
    line-height: 18px;
    strong {
      font-weight: bold;
    }
  }
`;

const ContainerAccordion = styled.div`
  margin-top: 82px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 17px;
  max-width: 580px;
  min-width: 310px;
  padding: 12px;
`;
