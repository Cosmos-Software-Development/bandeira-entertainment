import styled from "styled-components"
import transition1 from '../assets/transicao-1.png'
import ItemList from "./Common/ItemList"
import PriceCard from "./Common/PriceCard"
import arrowWhite from '../assets/arrow-down-white.png'

export default function Price(){
    return(
        <PriceContainer id="investimento">
            <ContainerTransition>
                <img src={transition1} />
            </ContainerTransition>
            <ContainerArrow>
                <a href="#faq"><img src={arrowWhite} /></a>
            </ContainerArrow>
            <ContainerTitle>
            <h1>Quanto <span>investir.</span></h1>
            </ContainerTitle>
            <ContainerList>
                <ItemList>6 sessões de consultoria <span>100% On-line</span></ItemList>
                <ItemList>Diagnóstico personalizado do seu projeto</ItemList>
                <ItemList>Acesso a 4 módulos gravados</ItemList>
                <ItemList>Templates atualizados bônus</ItemList>
            </ContainerList>
            <Container>
                <PriceCard/>
            </Container>
        </PriceContainer>
    )
}

const PriceContainer = styled.div`
    min-height: 520px;
    box-sizing: border-box;
    padding-top: 84px;
    padding-left: 25px;
    padding-right: 20px;
    padding-bottom: 25px;
    background-color: ${props => props.theme.colors['gray-950']};
    position: relative;
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
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
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
    h1 {
        color: ${props => props.theme.colors['gray-650']};
        font-family: 'montserrat', sans-serif;
        font-size: 38px;
        text-align: center;
        letter-spacing: -2px;
        span {
            font-weight: 600;
            font-style: italic;
        }
    }
`

const ContainerList = styled.div`
    margin-top: 56px;
    margin-bottom: 56px;
    display: flex;
    flex-direction: column;
    gap: 7px;
`