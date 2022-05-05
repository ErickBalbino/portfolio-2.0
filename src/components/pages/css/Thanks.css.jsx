import styled from 'styled-components'

export const Container = styled.div`
`

export const TextContainer = styled.div`
    height: 100vh;
    padding-top: 150px;
    padding-left: 40px;
    
    img{
        width: 300px;
    }

    .text__wrapper{
        transform: translateY(-200%);

        h1{
            color: #000;
            font-size: 2rem;
            font-weight: 500;

            span{
                color: #02a7bd;
            }
        }
    }
`