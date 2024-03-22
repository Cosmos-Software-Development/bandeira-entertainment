import styled from "styled-components"
import transition from '../assets/transicao-2.png'
import barraInferior from '../assets/barra-inferior.png'
import rectangle from '../assets/Rectangle.jpg'
import arrowBlack from '../assets/arrow-down-black.png'

export default function ManifestoMaior(){
    return(
        <ContainerManifestoMaior id="consultores">
            <ContainerTransition>
                <img src={transition} />
            </ContainerTransition>
            <ContainerArrow>
                <a href="#modulos"><img src={arrowBlack} /></a>
            </ContainerArrow>
            <BarraInferior>
                <img src={barraInferior} />
            </BarraInferior>
            <ContainerTitle>
            <h1>O <i>manifesto</i> dos <strong>sonhadores</strong><span> .</span></h1>
            </ContainerTitle>
            <ContainerText>
                <p>Diamond City Bank, we are happy serve to make life easier for you. Enjoy reliable, safe, and secure banking with us. Be able to chase and achieve your dreams and</p>
            </ContainerText>
            <ContainerImage>
                <img src={rectangle} />
            </ContainerImage>
            <ContainerText>
                <p>Diamond City Bank, we are happy serve to make life easier for you. Enjoy reliable, safe, and secure banking with us. Be able to chase and achieve your dreams and</p>
                <p>Diamond City Bank, we are happy serve to make life easier for you. Enjoy reliable, safe, and secure banking with us. Be able to chase and achieve your dreams and</p>
            </ContainerText>
            <ContainerImage>
                <img src={rectangle} />
            </ContainerImage>
            <ContainerButton>
                <button>Quero fazer parte</button>
            </ContainerButton>
            <BarraInferior >
                <img src={barraInferior} />
            </BarraInferior>
        </ContainerManifestoMaior>
    )
}

const ContainerManifestoMaior = styled.div`
    min-height: 720px;
    box-sizing: border-box;
    padding-top: 20px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 55px;
    background-color: ${props => props.theme.colors['gray-950']};
    position: relative;
`

const ContainerTransition = styled.div`
    position: absolute;
    top: -1px;
    left: 0;
    img {
        width: 100vw;
    }

    @media (min-width: 1024px){
        display: none;
    }
`

const ContainerArrow = styled.div`
    position: absolute;
    top: 18px;
    left: 0;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    justify-content: center;
    align-items: center;
    opacity: 0.70;
    img {
        width: 30px;
        margin-left: -2px;
        transform: rotate(90deg);
    }

    @media (min-width: 1024px){
        display: none;
    }
`

const BarraInferior = styled.div`
    margin-top: 82px;
    img {
        width: 100%;
    }
`

const ContainerTitle = styled.div`
    margin-top: 56px;
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
    letter-spacing: -5;
    h1 {
        font-size: 32px;
        font-weight: bold;
        width: 100%;
        max-width: 300px;
        color: ${props => props.theme.colors['gray-100']};
        font-family: 'montserrat', sans-serif;
        i {
            font-style: italic;
        }
        strong {
            background: ${props => props.theme.colors['gradient-1']};
            color: transparent;
            font-family: 'Druk Wide Bold', sans-serif;
            background-clip: text;
            -webkit-background-clip: text;
        }
        span {
            max-width: fit-content;
            color: ${props => props.theme.colors['gray-400']};
            letter-spacing: -5%;
        }
        span:last-child {
            color: ${props => props.theme.colors['gray-200']};
            font-family: 'montserrat', sans-serif;
        }
    }
`

const ContainerText = styled.div`
    margin-bottom: 20px;
    p {
        color: ${props => props.theme.colors['white']};
        font-family: 'montserrat', sans-serif;
        font-size: 14px;
        max-width: 300px;
        margin: 0 auto;
        letter-spacing: -3%;
        font-weight: 500;
        padding: 12px;
        line-height: 22px;
    }
`
const ContainerImage = styled.div`
    width: 100%;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    img {
        width: 100%;
        border-radius: 20px;
        max-width: 420px;
    }
`
const ContainerButton = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 42px;
        margin-bottom: -42px;
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