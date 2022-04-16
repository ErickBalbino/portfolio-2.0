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
    width: 50vw;
    margin: 0 20px;
    border-top: 6px solid #02C5DF;
    border-left: 6px solid #02C5DF;
    padding: 40px 20px 80px 20px;
    border-radius: 6px;

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
        font-size: 1.2rem;
        font-family: 'Raleway', sans-serif;
        padding-left: 5px;
        line-height: 1.5;

        #underline{
            animation: showAndHide 0.7s infinite;
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
    width: 50vw;
`

export const Projects = styled.div`
    background-color: #050606;
    padding-bottom: 60px;

    h1{
        color: #e5e5e5;
        font-size: 2.5rem;
        font-weight: 400;
        padding: 0px 0px 20px 40px;
    }
`

export const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;

`

export const Technologies = styled(Projects)`
    
`

export const TechnologiesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;

    .tecnologias__container__tecnologia{
        width: 26vw;
        background-color: #161616;
        border-radius: 10px;
        padding: 30px 0px;
        height: 780px;

        h3{
            text-align: center;
            font-size: 1.6rem;
            font-weight: 400;
            font-family: 'Raleway', sans-serif;
            padding-bottom: 30px;
            color: #e5e5e5;
        }

        .tecnologia{
            display: flex;
            align-items: center;
            width: 100%;
            margin: 30px 0px;

            .linha__azul{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 140px;
                height: 50px;
                background-color: #05B4DB;
                border-radius: 0px 30px 30px 0px;

                span{
                    font-size: 1.1rem;
                    color: #fff;
                    font-weight: 500;
                }
            }

            img{
                width: 80px;
            }

            #python{
                width: 75px;
                margin-left: 3px;
            }

            #mysql{
                margin-left: 3px;
            }

            #vscode{
                margin-left: 2px;
                width: 75px;
            }

            #git{
                width: 75px;
            }
        }

        .tecnologia__reverse{
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            width: 100%;
            height: 80px;
            margin: 50px 0px;

            .linha__azul__reverse{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 135px;
                height: 50px;
                background-color: #05B4DB;
                border-radius: 30px 0px 0px 30px;

                span{
                    font-size: 1.1rem;
                    color: #fff;
                    font-weight: 500;
                }
            }

            img{
                width: 80px;
            }

            #bootstrap{
                margin-right: 5px;
                width: 75px;
            }

            #php{
                margin-right: 3px;
            }

            #docker{
                margin-right: 3px;
            }

            #docker,
            #wordpress{
                width: 75px;
            }

            #wordpress{
                margin-right: 3px;
            }
        }
    }
`

export const Sobre = styled(Projects)`
    background-color: #1A1C1D;
    padding: 30px 0;
`

export const SobreContainer = styled.div`
    color: #e5e5e5;
    display: flex;
    justify-content: space-between;
    padding: 50px 40px;

    .image__container{
        width: 45vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 6px solid #02C5DF;
        border-right: 6px solid #02C5DF;
        padding: 30px 0;

        h3{
            font-weight: 400;
            font-size: 1.3rem;
        }

        img{
            width: 120px;
            margin-top: 20px;
            border-radius: 10px;

        }
    }

    .text__container{
        width: 55vw;
        display: flex;
        align-items: center;

        p{
            font-size: 1.1rem;
            line-height: 1.5;
            color: #ccc;
            padding-left: 60px;

            #underline{
                animation: showAndHide 0.7s infinite;
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
    }
`

export const Curriculo = styled(Projects)`
    background-color: #050606;
    padding: 50px 0;
    
    h1{
        text-align: center;
    }
`

export const CurriculoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        width: 300px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        margin: 0px 20px;
        color: #fff;
        font-size: 1.2rem;

        .icon{
            margin: 0 10px;
            font-size: 1.4rem;
        }
    }

    #pdf{
        background-color: #880800;
        border-bottom: 5px solid #D70F02;
    }

    #zip{
        background-color: #BB7802;
        border-bottom: 5px solid #dd8d02;
    }
`