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

    @media (max-width: 768px) {
        padding: 10px 30px;
    }
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

export const Sidebar = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        align-items: center; 

        .icon__menu{
            font-size: 1.5rem;
            font-weight: 400;
            color: #ccc;
        }
    }
`

export const SidebarContainer = styled.div`
    position: fixed;
    background-color: #121212;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    transition: all 0.5s;
    transform: translate(0, -100%);

    nav{
        padding-top: 20px;

        ul{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            li{
                color: #e5e5e5;
                margin: 10px 0;
                font-size: 1.15rem;
            }
            
            #button__contato{
                background-color: #fff;
                color: #000;
                padding: 8px 30px;
                border-radius: 5px;
                font-weight: 500;
                background-color: 4px 4px 8px #00000097;
                border: 2px solid transparent;
                transition: 0.2s ease-in-out background-color;
                display: flex;  
                align-items: center;

                .icone__celular{
                    margin-left: 5px;
                }

                &:hover{
                    background-color: #000;
                    color: #fff;
                    border: 2px solid #fff;
                }
            }
        }
    }
`

export const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20%;
    padding: 0 30px;

    img{
        width: 80px;
    }

    .icon__minimize {
        color: #a71212;
        font-size: 1.3rem;
    }
`