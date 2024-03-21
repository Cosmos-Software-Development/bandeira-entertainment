import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";
import thumb from '../assets/modulo-thumb.png'
import { useRef } from "react";
import { MdKeyboardArrowRight} from 'react-icons/md';

export default function Carousel() {
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
        <ContainerCarousel >
            <ContainerSlider>
                <Slider {...settings} ref={sliderRef}>
                    <ContainerThumb>
                        <img src={thumb} />
                    </ContainerThumb>
                    <ContainerThumb>
                        <img src={thumb} />
                    </ContainerThumb>
                    <ContainerThumb>
                        <img src={thumb} />
                    </ContainerThumb>
                </Slider>
            </ContainerSlider>
            <ContainerArrow >
                <NextButton onClick={clickArrowLeft}><MdKeyboardArrowRight /></NextButton >
            </ContainerArrow>
        </ContainerCarousel>
    )
}

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

const ContainerCarousel = styled.div`
    min-height: 450px;
    box-sizing: border-box;
    padding-top: 20px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 44px;
    background-color: ${props => props.theme.colors['gray-950']};
    position: relative;
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
    top: 160px;
    right: 12px;
    z-index: 3;
    img {
     width: 30px;
     filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4));
    }
`
const ContainerSlider = styled.div`

`