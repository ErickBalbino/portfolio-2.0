import styled from 'styled-components'

export const Container = styled.div`
    background-color: #050606;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    padding-top: 150px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-height: 500px){
        grid-template-columns: repeat(2, 1fr)
    }

    @media (min-width: 769px) and (max-width: 1150px){
        grid-template-columns: repeat(2, 1fr);
    }
`