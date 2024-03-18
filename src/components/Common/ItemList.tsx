import styled from "styled-components"
import check from '../../assets/check.png'
import { ReactNode } from "react"

interface ItemListProps {
    children: ReactNode
}

export default function ItemList({ children }: ItemListProps){
    return(
        <ContainerITemList>
            <div><img src={check}/></div>
            <p>{ children }</p>
        </ContainerITemList>
    )
}

const ContainerITemList = styled.li`
    display: flex;
    gap: 12px;
    img {
        width: 18px;
    }
    p {
        font-family: 'montserrat', sans-serif;
        letter-spacing: -5%;
        font-size: 14px;
        color: ${props => props.theme.colors['white']};
        span {
            font-weight: 700;
        }
    }
`