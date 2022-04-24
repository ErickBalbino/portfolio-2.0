import styled from 'styled-components'

export const Container = styled.div`
    padding-top: 150px;
    background-color: #050606;
    height: calc(100vh - 120px);
    
    h1, button{
        color: #e5e5e5;
        margin-left: 40px;
    }

    h1{
        font-weight: 500;
        font-size: 2rem;
    }

    button{
        background-color: #02C5DF;
        color: #fff;
        font-size: 1.05rem;
        font-weight: 500;
        padding: 7px 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: transparent;
        border: transparent;
        border-radius: 5px;
        margin-top: 20px;
        transition: 0.2s ease-in-out background-color;

        .icon{
            margin-right: 5px;
        }

        &:hover{
            cursor: pointer;
            background-color: #01a2b8;
        }
    }
`