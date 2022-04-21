import styled from 'styled-components'

export const Container = styled.div`
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #050606;
`

export const IconsContainer = styled.div`
    .icon{
        font-size: 2.8rem;
        margin: 0 10px;
        fill: #4d4d4d;
        border-radius: 20%;
        transition: 0.2s ease-in-out background-color;

        &:hover{
            fill: #ccc;
            background-color: #1d1d1d;
            padding: 5px;
            cursor: pointer;
        }
    }
`