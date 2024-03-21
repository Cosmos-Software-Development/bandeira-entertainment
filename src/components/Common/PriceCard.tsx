import styled from "styled-components"

export default function PriceCard() {
    return (
        <PriceCardContainer>
            <ContainerInfo>
                <ContainerText>
                    <p>12 vezes de:</p>
                </ContainerText>
                <ContainerPriceValue>
                    <p>R$</p><p>238</p><span>,78</span>
                </ContainerPriceValue>
                <ContainerText>
                    <p>Ou R$ 1.900 à vista.</p>
                </ContainerText>
            </ContainerInfo>
            <Container>
            <ContainerObs>
                <p><span>*</span>Consultoria semanal durante <strong>6 semanas</strong></p>
            </ContainerObs>
            <ContainerButton>
                <button>Quero me inscrever</button>
            </ContainerButton>
            </Container>
        </PriceCardContainer>
    )
}

const PriceCardContainer = styled.div`
    width: 280px;
    height: 220px;
    border-radius: 24px;
    background: ${props => props.theme.colors['gradient-3']};
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;
`

const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const ContainerButton = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
       button {
        padding: 12px;
        border-radius: 8px;
        background: ${props => props.theme.colors['gradient-1']};
        font-family: "Montserrat", sans-serif;
        color: ${props => props.theme.colors['white']};
        letter-spacing: -5%;
        text-align: center;
        border: none;
        font-weight: bold;
        width: 100%;
        max-width: 200px;
        cursor: pointer;
    }
`

const ContainerText = styled.div`
    p {
        font-family: "Montserrat", sans-serif;
        color: ${props => props.theme.colors['gray-600']};
        font-size: 14px;
        font-weight: 500;
    }
`

const ContainerPriceValue = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 6px;
    p {
        color: ${props => props.theme.colors['white']};
        font-weight: 700;
        letter-spacing: 2%;
        font-size: 38px;
        font-family: 'montserrat', sans-serif;
    }
    p:first-child {
        padding-top: 8px;
        padding-right: 4px;
        font-size: 24px;
    }
    span {
        color: ${props => props.theme.colors['white']};
        font-weight: 700;
        letter-spacing: 2%;
        font-size: 26px;
        font-family: 'montserrat', sans-serif;
    }
`

const ContainerObs = styled.div`
    p {
        font-family: "Montserrat", sans-serif;
        color: ${props => props.theme.colors['gray-600']};
        font-size: 10px;
        font-weight: 500;
        span {
            font-weight: 900;
        }
        strong {
            font-weight: 700;
        }

    }
`