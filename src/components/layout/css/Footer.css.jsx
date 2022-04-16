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
        font-size: 3rem;
        margin: 0 10px;
        padding: 5px;
        background-color: #ccc;
        fill: #1d1d1d;
        border-radius: 50%;
        transition: 0.2s ease-in-out background-color;

        &:hover{
            fill: #ccc;
            background-color: #1d1d1d;
            padding: 5px;
            cursor: pointer;
        }
    }
`