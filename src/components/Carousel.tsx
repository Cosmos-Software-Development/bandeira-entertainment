import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";
import thumb from '../assets/modulo-thumb.png'
import arrow from '../assets/arrow.png'
import { useRef } from "react";

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
                    <img src={arrow} onClick={clickArrowLeft} />
                </ContainerArrow>
        </ContainerCarousel>
    )
}

const ContainerCarousel = styled.div`
    min-height: 420px;
    box-sizing: border-box;
    padding-top: 20px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 20px;
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
    top: 130px;
    right: 12px;
    z-index: 3;
    img {
     width: 30px;
     filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4));
    }
`
const ContainerSlider = styled.div`

`