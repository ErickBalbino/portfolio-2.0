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
                }

                #contato{
                    background-color: #fff;
                    color: #000;
                    padding: 8px 20px;
                    border-radius: 10px;
                    font-weight: 500;
                    background-color: 4px 4px 8px #00000097;
                }
            }
        }
    }
`