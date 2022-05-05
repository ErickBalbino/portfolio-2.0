import styled from 'styled-components'

export const Container = styled.div`
`

export const TextContainer = styled.div`
    height: calc(100vh - 120px);
    padding-top: 150px;
    padding-left: 40px;

    h1{
        color: #000;
        font-size: 2rem;
        font-weight: 500;

        span{
            color: #02a7bd;
            display: block;
        }
    }

    @media (max-width: 768px) {
        padding-top: 180px;
        padding-left: 20px;
    }
`