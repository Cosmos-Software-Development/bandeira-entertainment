import styled from "styled-components"
import transition1 from '../assets/transicao-1.png'
import foldImage from '../assets/fold-image-2.png'
import Slider, { Settings } from "react-slick"

export default function Bonus(){

    const settings: Settings = {
        arrows: false,
        centerMode: true,
        infinite: false,
    }

    return(
        <ContainerBonus>
            <ContainerTransition>
                <img src={transition1} />
            </ContainerTransition>
            <ContainerTitle>
                <h1>materiais <span>bônus</span> <strong>.</strong></h1>
            </ContainerTitle>
            <ContainerSlider>
            <Slider {...settings} >
                    <ContainerThumb>
                        <img src={foldImage} />
                    </ContainerThumb>
                    <ContainerThumb>
                        <img src={foldImage} />
                    </ContainerThumb>
                    <ContainerThumb>
                        <img src={foldImage} />
                    </ContainerThumb>
                </Slider>
            </ContainerSlider>
        </ContainerBonus>
    )
}

const ContainerBonus = styled.div`
    min-height: 520px;
    box-sizing: border-box;
    padding-top: 54px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 20px;
    background-color: ${props => props.theme.colors['white']};
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

const ContainerSlider = styled.div`
    font-family: 'montserrat', sans-serif;
`

const ContainerThumb = styled.div`
    max-width: 320px;
    position: relative;
    img {
        width: 100%;
    }
`

const ContainerTitle = styled.div`
    font-family: 'montserrat', sans-serif;
    padding-left: 42px;
    padding-bottom: 42px;
    h1 {
        max-width: 230px;
        font-size: 38px;
        font-weight: 100;
        line-height: 38px;
        letter-spacing: -5%;
        font-family: 'montserrat', sans-serif;
        span {
            font-family: 'Druk Wide Bold';
            color: ${props => props.theme.colors['gray-650']};
        }
        strong {
            color: ${props => props.theme.colors['gray-600']};
            font-family: 'montserrat', sans-serif;
            font-weight: 700;

        }
    }
`