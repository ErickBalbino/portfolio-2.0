import styled from 'styled-components'

export const Container = styled.div`
    width: 23vw;
    height: 350px;
    background-image: ${props => `url('assets/images/${props.bgImage}')`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-end;
    border-radius: 10px;
    border: 2px solid #02C5DF;


    p{
        color: #e5e5e5;
        background-color: #3d3d3d;
        padding: 10px;
        transition: 0.5s ease-in-out height;
    }

    &:hover{
        p{
            display: flex;
            align-items: center;
            height: 100%;
            text-align: center;
            cursor: pointer;
        }
    }
`