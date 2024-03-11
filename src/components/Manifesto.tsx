import styled from "styled-components"
import transition1 from '../assets/transicao-1.png'

export default function Manifesto(){
    return(
        <ContainerManifesto>
            <ContainerTransition>
                <img src={transition1} />
            </ContainerTransition>
            <ContainerTitle>
                <h1>O manifesto dos <span>sonhadores</span></h1>
            </ContainerTitle>
        </ContainerManifesto>
    )
}

const ContainerManifesto = styled.div`
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 20px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 55px;
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
    h1 {
        text-align: center;
        font-size: 26px;
        font-weight: bold;
        color: ${props => props.theme.colors['gray-900']};
        font-family: 'montserrat', sans-serif;
        span {
            font-family: 'Druk Wide Bold', sans-serif;
            color: ${props => props.theme.colors['gray-400']};
        }
    }
`