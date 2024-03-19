import styled from "styled-components"
import seta from '../assets/seta.png'
import Accordion from "./Common/Accordion"

export default function Faq(){
    return(
        <FaqContainer id="faq">
            <ContainerTitle>
                <h1>FAQ</h1><span><strong>Dúvidas</strong><br/>Frequentes</span>
            </ContainerTitle>
            <ContainerAccordion>
                <Accordion image={seta} body="Diamond City Bank, we are happy serve to make life easier for you. Enjoy reliable, safe, and secure banking with us. Be able to chase and achieve your dreams and " title="Quanto tempo irá durar a consultoria?"/>
                <Accordion image={seta} body="Diamond City Bank, we are happy serve to make life easier for you. Enjoy reliable, safe, and secure banking with us. Be able to chase and achieve your dreams and " title="O acesso aos materiais são vitalícios?"/>
                <Accordion image={seta} body="Diamond City Bank, we are happy serve to make life easier for you. Enjoy reliable, safe, and secure banking with us. Be able to chase and achieve your dreams and " title="Até quando posso me inscrever?"/>
                <Accordion image={seta} body="Diamond City Bank, we are happy serve to make life easier for you. Enjoy reliable, safe, and secure banking with us. Be able to chase and achieve your dreams and " title="Dá pra parcelar por boleto?"/>
            </ContainerAccordion>
        </FaqContainer>
    )
}

const FaqContainer = styled.div`
    min-height: 520px;
    box-sizing: border-box;
    padding-top: 62px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 32px;
    background-color: ${props => props.theme.colors['gray-950']};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    h1 {
        width: fit-content;
        background: ${props => props.theme.colors['gradient-1']};
        color: transparent;
        background-clip: text;
        font-family: 'Druk Wide Bold', sans-serif;
        font-size: 44px;
    }
    span {
        color: ${props => props.theme.colors['white']};
        font-family: 'montserrat', sans-serif;
        line-height: 18px;
        strong {
            font-weight: bold;
        }

    }
`

const ContainerAccordion = styled.div`
    margin-top: 82px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 17px;
    max-width: 580px;
    min-width: 310px;
    padding: 12px;

`