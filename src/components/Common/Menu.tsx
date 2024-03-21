import styled from "styled-components"
import logo from '../../assets/bandeira-logo.png'
import { useEffect } from "react"
import { RiCloseFill } from "react-icons/ri";

interface MenuProps {
    open: boolean
    closeMenu: () => void
}

export default function Menu({ open, closeMenu }: MenuProps){

    useEffect(() => {
        if(open){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [open])

    return(
        <ContainerMenu open={open}>
            <RiCloseFill color='#ffffff' size={34} onClick={() => closeMenu()}/>
            <Container>
            <ContainerLinks>
                <a href="#programa" onClick={() => closeMenu()}>O PROGRAMA</a>
                <a href="#consultores" onClick={() => closeMenu()}>OS CONSULTORES</a>
                <a href="#modulos"  onClick={() => closeMenu()}>MÓDULOS DE IMERSÃO</a>
                <a href="#investimento" onClick={() => closeMenu()}>INVESTIMENTO</a>
                <a href="#faq" onClick={() => closeMenu()}>FAQ</a>
                <a href="#contato" onClick={() => closeMenu()}>FALE CONOSCO</a>
            </ContainerLinks>
            <ContainerLogo>
                <img src={logo} />
            </ContainerLogo>
            </Container>
        </ContainerMenu>
    )
}

const ContainerMenu = styled.dialog`
    width: 100%;
    height: 100%;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    z-index: 4;
    top: 0;
    background: ${props => props.theme.colors['gradient-1']};
    svg {
        position: absolute;
        right: 30px;
        top: 24px;
    }
`

const Container = styled.div`
    height: 100%;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
`

const ContainerLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    a {
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        text-decoration: none;
        font-weight: 600;
        color: ${props => props.theme.colors['white']};
    }
`

const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 42px;
    img {
        width: 132px;
    }
`