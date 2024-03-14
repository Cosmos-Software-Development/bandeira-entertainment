import { useState } from "react";
import styled from "styled-components";

interface AccordionProps {
    image: string
    title: string
    body: string
} 

export default function Accordion({image, title, body}: AccordionProps){
    const [open, setOpen] = useState<boolean>(false)

    function toggleAccordion(){
        setOpen(o => !o)
    }

    return(
        <AccordionContainer>
            <AccordionTitle onClick={toggleAccordion}>
                <AccordionIcon open={open}>
                    <img src={image} />
                </AccordionIcon>
                <h2>{title}</h2>
            </AccordionTitle>
            <AccordionBody className={open ? 'open': ''}>
                <p>{body}</p>
            </AccordionBody>
            <AccordionLine />
        </AccordionContainer>
    )
}

const AccordionContainer = styled.div`
 cursor: pointer;
 .open {
        height: auto;
    }

`

const AccordionTitle = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 8px;
    h2 {
        color: ${props => props.theme.colors['white']};
        font-family: 'montserrat', sans-serif;
        font-weight: bold;
    }
`

const AccordionBody = styled.div`
    padding-left: 40px;
    height: 0;
    overflow: hidden;
    p {
        color: ${props => props.theme.colors['white']};
        font-family: 'montserrat', sans-serif;
    }
`

const AccordionLine = styled.div`
    margin-top: 12px;
    background: ${props => props.theme.colors['gradient-2']};
    height: 1px;
    width: 100%;
    border-radius: 1px;
`

interface AccordionIconProps {
    open: boolean
}

const AccordionIcon = styled.div<AccordionIconProps>`
    img {
        transform: ${props => props.open ? 'rotateZ(90deg)' : 'rotateZ(0deg)'};
        width: 28px;
    }
`