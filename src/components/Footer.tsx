import styled from "styled-components"
import instaIcon from '../assets/instagram-icon.png'
import whatsappIcon from '../assets/whatsapp-icon.png'
import linkedinIcon from '../assets/linkedin-icon.png'
import logo from '../assets/bandeira-logo.png'

export default function Footer(){
    return(
        <ContainerFooter>
            <ContainerSocial>
                <p>Acompanhe em</p>
                <ContainerIcons>
                    <img src={instaIcon} />
                    <img src={whatsappIcon} />
                    <img src={linkedinIcon} />
                </ContainerIcons>
            </ContainerSocial>
            <ContainerLinks>
                <a>O PROGRAMA</a>
                <a>OS CONSULTORES</a>
                <a>MÓDULOS DE IMERSÃO</a>
                <a>INVESTIMENTO</a>
                <a>FAQ</a>
                <a>FALE CONOSCO</a>
            </ContainerLinks>
            <ContainerLogo>
                <img src={logo} />
            </ContainerLogo>
            <ContainerCopy>
                <p>Copyright © 2024. Bandeira Entretenimento</p>
                <p>Todos os direitos reservados. CNPJ: 30.798.660/0001-20</p>
            </ContainerCopy>
        </ContainerFooter>
    )
}

const ContainerFooter =styled.div`
    padding-top: 54px;
    padding-left: 25px;
    padding-right: 20px;
    padding-bottom: 32px;
    background: ${props => props.theme.colors['gradient-1']};
`

const ContainerSocial = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
    p {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        letter-spacing: -3%;
        color: ${props => props.theme.colors['white']};
        font-size: 14px;
    }
`

const ContainerIcons = styled.div`
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    img {
        width: 30px;
    }
`

const ContainerLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    margin-top: 52px;
    a {
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: ${props => props.theme.colors['white']};
    }
`

const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 42px;
    img {
        width: 132px;
    }
`

const ContainerCopy = styled.div`
    margin-top: 42px;
    p {
        font-family: "Montserrat", sans-serif;
        font-size: 10px;
        color: ${props => props.theme.colors['white']};
        letter-spacing: -3%;
        font-weight: 300;
        text-align: center;
    }

    p:first-child {
        font-weight: 700;
    }

`