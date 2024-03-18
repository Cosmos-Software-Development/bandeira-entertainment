import styled from "styled-components"
import transition1 from '../assets/transicao-1.png'
import ItemList from "./Common/ItemList"
import PriceCard from "./Common/PriceCard"

export default function Price(){
    return(
        <PriceContainer>
            <ContainerTransition>
                <img src={transition1} />
            </ContainerTransition>
            <ContainerTitle>
            <h1>Quanto <span>investir.</span></h1>
            </ContainerTitle>
            <ContainerList>
                <ItemList>6 sessões de consultoria <span>100% On-line</span></ItemList>
                <ItemList>Diagnóstico personalizado do seu projeto</ItemList>
                <ItemList>Acesso a 4 módulos gravados</ItemList>
                <ItemList>Templates atualizados bônus</ItemList>
            </ContainerList>
            <PriceCard/>
        </PriceContainer>
    )
}

const PriceContainer = styled.div`
    min-height: 520px;
    box-sizing: border-box;
    padding-top: 54px;
    padding-left:   25px;
    padding-right:  20px;
    padding-bottom: 20px;
    background-color: ${props => props.theme.colors['gray-950']};
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
    h1 {
        color: ${props => props.theme.colors['gray-650']};
        font-family: 'montserrat', sans-serif;
        font-size: 38px;
        text-align: center;
        span {
            font-weight: 600;
        }
    }
`

const ContainerList = styled.div`
    margin-top: 52px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 7px;
`