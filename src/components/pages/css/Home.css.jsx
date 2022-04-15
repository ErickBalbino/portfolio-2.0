import styled from 'styled-components'

export const Container = styled.main`
`

export const Introduction = styled.div`
    background-color: #050606;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    padding-top: 50px;
`

export const TextWrapper = styled.div`
    margin: 0 50px ;
    border-top: 4px solid #02C5DF;
    border-left: 4px solid #02C5DF;
    padding: 40px 40px 80px 40px;

    h1, p{
        color: #e5e5e5;
    }

    h1{
        font-family: 'Raleway', sans-serif;
        font-size: 3.5rem;
        font-weight: 500;
        padding-bottom: 20px;
    }

    p{
        width: 90%;
        font-size: 1.2rem;
        font-family: 'Raleway', sans-serif;
        padding-left: 5px;
        line-height: 1.5;

        #underline{
            animation: showAndHide 0.7s infinite;
            font-size: 1.4rem;
        }

        @keyframes showAndHide {
            50%{
                opacity: 0;
            }

            100%{
                opacity: 1;
            }
        }
    }
`

export const Image = styled.div`

`

export const Projects = styled.div`
    background-color: #050606;
    padding: 0 0px 60px 40px;

    h1{
        color: #e5e5e5;
        font-size: 2.5rem;
        font-weight: 400;
        padding-bottom: 20px;
    }
`