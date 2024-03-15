import styled from "styled-components"
import transition1 from '../assets/transicao-1.png'
import rectangle from '../assets/Rectangle.jpg'

export default function Manifesto() {
    return (
        <ContainerManifesto>
            <ContainerTransition>
                <img src={transition1} />
            </ContainerTransition>
            <ContainerTitle>
                <h1>O <i>manifesto</i> dos <span>sonhadores</span><span> .</span></h1>
            </ContainerTitle>
            <ContainerImage>
                <img src={rectangle} />
            </ContainerImage>
            <ContainerText>
                <p>Você foi convocado a participar desse movimento de disrupção a transformá-lo em um sonhador empreendedor de marcas de entretenimento.</p>
            </ContainerText>
            <ContainerButton>
                <button>Quero fazer parte</button>
            </ContainerButton>
        </ContainerManifesto>
    )
}

const ContainerManifesto = styled.div`
    min-height: 620px;
    box-sizing: border-box;
    padding-top: 20px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 25px;
    background-color: ${props => props.theme.colors['gray-100']};
    position: relative;
`
const ContainerTransition = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    img {
        width: 100vw;
    }
`

const ContainerTitle = styled.div`
    margin-top: 56px;
    display: flex;
    justify-content: center;
    margin-bottom: 42px;
    h1 {
        i {
            font-style: italic;
        }
        font-size: 26px;
        font-weight: bold;
        width: 100%;
        max-width: 250px;
        color: ${props => props.theme.colors['gray-900']};
        font-family: 'montserrat', sans-serif;
        span {
            max-width: fit-content;
            font-family: 'Druk Wide Bold', sans-serif;
            color: ${props => props.theme.colors['gray-400']};
            letter-spacing: -5%;
        }
        span:last-child {
            color: ${props => props.theme.colors['gray-200']};
            font-family: 'montserrat', sans-serif;
        }
    }
`

const ContainerImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        max-width: 420px;
    }
`

const ContainerText = styled.div`
    margin-top: 42px;
    p {
        text-align: center;
        color: ${props => props.theme.colors['gray-900']};
        font-family: 'montserrat', sans-serif;
        font-size: 14px;
        font-weight: 500;
        padding: 12px;
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