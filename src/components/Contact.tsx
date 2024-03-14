import styled from "styled-components"
import whatsappIcon from '../assets/Whatsapp-icon.png'
import emailIcon from '../assets/email-icon.png'
import ContactCard from "./Common/ContactCard"

const contactData = [
    {
        image: whatsappIcon,
        title: 'Atendimento pelo E-mail',
        subtitle: 'Dúvidas sobre sua inscrição',
        contactList: ['(84) 9 9827 8054']
    },
    {
        image: emailIcon,
        title: 'Atendimento pelo E-mail',
        subtitle: 'Dúvidas sobre sua inscrição',
        contactList: ['suportecolab@bandeiraentretenimento.com.br']
    }
]

export default function Contact(){
    return(
        <ContactContainer>
            <ContainerTitle>
                <h1>Ainda Com dúvidas?</h1>
                <p>Fale com nosso time</p>
            </ContainerTitle>
            <ContainerCardContact>
                {contactData.map(c => <ContactCard contactList={c.contactList} image={c.image} subtitle={c.subtitle} title={c.title} key={c.title}/>)}
            </ContainerCardContact>
            <ContainerList>
                <ul>
                    <li>Consultoria <strong>100% On-line</strong></li>
                    <li>Risco Zero :  garantia de <strong>7 dias</strong></li>
                    <li>Pagamento <strong>totalmente</strong> seguro</li>
                </ul>
            </ContainerList>
            <ContainerButton>
                <button>Garanta sua vaga agora</button>
            </ContainerButton>
            <Footer>
                <p>Não perca tempo. <strong>As vagas são limitadas</strong> e podem esgotar a qualquer momento</p>
            </Footer>
        </ContactContainer>
    )   
}

const ContactContainer = styled.div`
    min-height: 720px;
    box-sizing: border-box;
    padding-top: 20px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 25px;
    background-color: ${props => props.theme.colors['gray-950']};
    
`

const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    h1 {
        font-family: 'montserrat', sans-serif;
        background: ${props => props.theme.colors['gradient-1']};
        color: transparent;
        font-weight: bold;
        width: fit-content;
        font-size: 28px;
        background-clip: text;
        max-width: 320px;
        width: 100%;
    }
    p {
        font-family: 'montserrat', sans-serif;
        color: ${props => props.theme.colors['white']};
        font-size: 18px;
        max-width: 320px;
        width: 100%;
    }
`

const ContainerCardContact = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 20px;
   gap: 28px;
`

const ContainerList = styled.div`
    margin-top: 32px;
    padding-left: 32px;
    ul {
        display: flex;
        flex-direction: column;
        gap: 13px;
        li {
            list-style: disc;
            list-style-position: inside;
            color: ${props => props.theme.colors['white']};
            font-family: 'montserrat', sans-serif;
            strong {
                font-weight: bold;
            }
        }
    }
`

const ContainerButton = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 42px;
       button {
        padding: 12px;
        border-radius: 8px;
        background: ${props => props.theme.colors['gradient-1']};
        font-family: "Montserrat", sans-serif;
        color: ${props => props.theme.colors['white']};
        letter-spacing: -5%;
        text-align: center;
        border: none;
        font-weight: bold;
        width: 100%;
        max-width: 200px;
        cursor: pointer;
    }
`

const Footer = styled.footer`
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        color: ${props => props.theme.colors['white']};
            font-family: 'montserrat', sans-serif;
            max-width: 260px;
            font-size: 12px;
            text-align: center;
            strong {
                font-weight: bold;
            }
    }
`