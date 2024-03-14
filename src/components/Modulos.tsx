import styled from "styled-components"
import transitionImg from '../assets/transicao-3.png'

export default function Modulos(){
    return(
        <ContainerModulos>
            <ContainerTransition>
                <img src={transitionImg} />
            </ContainerTransition>
            <ContainerTitle>
            <h1>Dez  módulos <span>imersivos</span><span> .</span></h1>
            </ContainerTitle>
            <p><strong>Em 2 meses</strong> focados em construir uma marca forte para os seu <strong>produto de entretenimento.</strong></p>
        </ContainerModulos>
    )
}

const ContainerTransition = styled.div`
    position: absolute;
    top: -1px;
    left: 0;
    img {
        width: 100vw;
    }
`

const ContainerModulos = styled.div`
    box-sizing: border-box;
    background: ${props => props.theme.colors['gradient-1']};
    position: relative;
    padding-top: 54px;
    padding-bottom: 44px;
    padding-right: 20px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        font-family: 'montserrat', sans-serif;
        font-weight: 400;
        text-align: center;
        color: ${props => props.theme.colors['white']};
        font-size: 14px;
        strong {
            font-weight: bold;
        }
    }
`

const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
    h1 {

        font-size: 20px;
        text-align: center;
        font-weight: 600;
        width: 100%;
        color: ${props => props.theme.colors['gray-100']};
        font-family: 'montserrat', sans-serif;
        span:first-child {
            color: ${props => props.theme.colors['gray-100']};
            background-clip: text;
        }
        span {
            max-width: fit-content;
            font-family: 'Druk Wide Bold', sans-serif;
            color: ${props => props.theme.colors['gray-400']};
            letter-spacing: -5%;
        }
        span:last-child {
            color: ${props => props.theme.colors['gray-200']}
        }
    }
`