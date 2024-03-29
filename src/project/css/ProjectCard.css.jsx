import styled from "styled-components";

export const Container = styled.div`
  width: 28vw;
  height: 380px;
  background-image: ${(props) => `url('assets/images/${props.bgImage}')`};
  background-size: cover;
  background-position-y: top;
  background-position-x: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  border-radius: 10px;
  border: 2px solid #02c5df;
  margin-bottom: 50px;

  .link__container {
    background-color: #3d3d3d;
    padding: 10px;
    width: 100%;
    transition: 0.2s ease-in-out background-color;

    p {
      color: #e5e5e5;
    }
  }

  &:hover {
    .link__container {
      display: flex;
      align-items: center;
      height: 100%;
      text-align: center;
      cursor: pointer;
      font-size: 1.1rem;
      background-color: #3d3d3dd6;
    }
  }

  @media (max-width: 768px) {
    & {
      width: 80vw;
      height: 340px;
    }
  }

  @media (max-height: 500px) {
    width: 40vw;
  }

  @media (min-width: 1400px) {
    & {
      height: 420px;
    }
  }

  @media (min-width: 1700px) {
    & {
      height: 500px;
    }
  }

  @media (min-width: 769px) and (max-width: 1150px) {
    width: 40vw;
  }
`;
