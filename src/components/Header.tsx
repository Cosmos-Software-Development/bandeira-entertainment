import styled from "styled-components"
import bg from '../assets/Bg2.png'
import menu from '../assets/menu.svg'
import barraInferior from '../assets/barra-inferior.png'
import star from '../assets/estrela.png'

export default function Header() {
    return (
        <HeaderContainer>
            <MenuContainer>
                <img src={menu} />
            </MenuContainer>
            <BarraInferior>
                <img src={barraInferior} />
            </BarraInferior>
            <ContainerTitle>
                <h1>Programa<span>co</span><span>lab</span></h1>
            </ContainerTitle>
            <ContainerStar>
                <img src={star} />
            </ContainerStar>
            <ContainerContent>
                <h1>O manifesto dos <span>sonhadores .</span></h1>
                <p>Diamond City Bank, we are happy serve to make life easier for you. Enjoy reliable, safe, and secure banking with us. Be able to chase and achieve your dreams and </p>
            </ContainerContent>
            <ContainerButton>
                <button>Quero fazer parte</button>
                <img src={star} />
            </ContainerButton>
            <BarraInferior>
                <img src={barraInferior} />
            </BarraInferior>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    padding-top: 20px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 55px;

    @media(min-width: 1024px){
        background-position: center;
    }
`

const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 20px;
    img {
        width: 32px;
    }
`

const BarraInferior = styled.div`
    margin-top: 12px;
    img {
        width: 100%;
    }
`

const ContainerTitle = styled.div`
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 28px;
        font-family: "Montserrat", sans-serif;
        font-size: 12px;
        color: ${props => props.theme.colors['white']};
        span:first-child {
            font-family: 'Druk Wide Bold', sans-serif;
            color: ${props => props.theme.colors['white']};
            font-weight: 400;
            font-size: 22px;
            margin-left: 8px;
        }
        span {
            font-family: 'Druk Wide Bold', sans-serif;
            letter-spacing: -3%;
            color: ${props => props.theme.colors['white']};
            font-size: 26px;
        }
    }
`

const ContainerStar = styled.div`
    height: 140px;
    img {
        width: 52px;
    }
`

const ContainerContent = styled.div`
    margin-top: 40px;
    h1 {
        font-family: "Montserrat", sans-serif;
        color: ${props => props.theme.colors['white']};
        text-align: center;
        font-weight: bold;
        letter-spacing: -3%;
        margin-bottom: 12px;
        span {
            font-family: 'Druk Wide Bold', sans-serif;
            letter-spacing: -3%;
            color: ${props => props.theme.colors['white']};
            font-size: 18px;
        }
    }
    p {
        text-align: center;
        color: ${props => props.theme.colors['white']};
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 12px;
    }
`

const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 36px;
    position: relative;
    img {
        width: 52px;
        position: absolute;
        right: 0;
    }
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
        cursor: pointer;
        max-width: 200px;
    }
`