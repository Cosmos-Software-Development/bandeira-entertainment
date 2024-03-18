import styled from "styled-components"

interface ContactCardProp {
    image: string
    title: string
    subtitle: string
    contactList: string[]
}

export default function ContactCard({ image, title, subtitle, contactList }: ContactCardProp){
    return(
        <ContainerContactCard>
            <img src={image} />
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <ContactListContainer>
                {contactList.map ((c) => <p key={c}>{c}</p>)}
            </ContactListContainer>
        </ContainerContactCard>
    )
}

const ContainerContactCard = styled.div`
    width: 280px;
    height: 220px;
    border-radius: 24px;
    background: ${props => props.theme.colors['gradient-3']};
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
    img {
        width: 52px;
    }
    h1 {
        color: ${props => props.theme.colors['white']};
        font-family: 'montserrat', sans-serif;
        font-weight: bold;
        font-size: 22px;
        text-align: center;
        line-height: 26px;
        padding-left: 24px;
        padding-right: 24px;
    }
    p {
        word-break: break-word;
        color: ${props => props.theme.colors['white']};
        font-family: 'montserrat', sans-serif;
        max-width: 202px;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
    }
`

const ContactListContainer = styled.div`
     p {
        color: ${props => props.theme.colors['gray-700']};
        font-weight: bold;
        font-size: 16px;
    }
`