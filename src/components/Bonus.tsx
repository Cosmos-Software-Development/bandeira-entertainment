import styled from "styled-components"
import transition1 from '../assets/transicao-1.png'
import foldImage from '../assets/fold-image-2.png'
import Slider, { Settings } from "react-slick"
import { useRef } from "react"
import { MdKeyboardArrowRight} from 'react-icons/md';

export default function Bonus() {
    const sliderRef = useRef<Slider>(null)

    const clickArrowLeft = () => {
        sliderRef.current?.slickNext()
    }

    const settings: Settings = {
        arrows: false,
        centerMode: true,
        infinite: false,
    }

    return (
        <ContainerBonus>
            <ContainerTransition>
                <img src={transition1} />
            </ContainerTransition>
            <ContainerTitle>
                <h1>materiais <span>bônus</span> <strong>.</strong></h1>
            </ContainerTitle>
            <ContainerSlider>
                <Slider {...settings} ref={sliderRef}>
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
            <ContainerArrow >
                <NextButton onClick={clickArrowLeft}><MdKeyboardArrowRight /></NextButton >
            </ContainerArrow>
            <ContainerText>
                <p>Você foi convocado a participar desse movimento de disrupção a transformá-lo em um sonhador empreendedor de marcas de entretenimento.</p>
            </ContainerText>
        </ContainerBonus>
    )
}

const ContainerBonus = styled.div`
    min-height: 520px;
    box-sizing: border-box;
    padding-top: 54px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 44px;
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

const ContainerArrow = styled.div`
    position: absolute;
    top: 310px;
    right: 12px;
    z-index: 3;
    img {
     width: 30px;
     filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4));
    }
`

const ContainerText = styled.div`
    margin-top: 42px;
    p {
        text-align: center;
        color: ${props => props.theme.colors['gray-900']};
        font-family: 'montserrat', sans-serif;
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
        padding: 24px;
    }
`

const NextButton = styled.button`
font-size: 32px;
display: flex;
justify-content: center;
align-items: center;
color: white;
cursor: pointer;
background: rgba( 255, 255, 255, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 13.5px );
-webkit-backdrop-filter: blur( 13.5px );
border-radius: 10px;
width: 50px;
height: 50px;
border-radius: 50%;
border: 1px solid rgba( 255, 255, 255, 0.18 );
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
        letter-spacing: -2px;
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