import styled from 'styled-components'

export const Container = styled.header`
    height: 130px;
    width: 100vw;
    background-color: #121414;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 40px;
    position: fixed;
    top: 0;
    z-index: 10;
    transition: top 0.2s;
`

export const Logo = styled.div`
    img{
        width: 75px;
    }
`

export const Menu = styled.div`
    height: auto;

    nav{
        ul{
            display: flex;
            
            li{
                margin: 0 10px;
                padding: 40px 0;
                
                .item__list{
                    color: #eee;
                    font-size: 1.05rem;
                    position: relative;
                    padding: 5px 0;

                    
                }

                #button__contato{
                    background-color: #fff;
                    color: #000;
                    padding: 8px 20px;
                    border-radius: 5px;
                    font-weight: 500;
                    background-color: 4px 4px 8px #00000097;
                    border: 2px solid transparent;
                    transition: 0.2s ease-in-out background-color;

                    &:hover{
                        background-color: #000;
                        color: #fff;
                        border: 2px solid #fff;
                    }
                }

                .list__blue::after{
                    content: "";
                    height: 2px;
                    background-color: #02C5DF;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    opacity: 0;
                    transform: scaleX(0);
                    transform-origin: left center;
                    transition: all ease-in-out 0.25s;
                }

                &:hover{
                    .list__blue::after{
                        opacity: 1;
                        transform: scaleX(1);
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        &{
            display: none;
        }
    }
`