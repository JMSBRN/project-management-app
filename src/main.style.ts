import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik Bubbles', cursive;
    font-size: 18px;
  }
`;

export const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(to right, #44a08d, #093637);
`;

export const Loader = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 40%;
  left: 48%;
  border: 5px solid;
  border-color: #fff #fff transparent transparent;
  background: rgba(68, 160, 141, 0.5);
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  z-index: 9999;
  :after,
  :before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 5px solid;
    border-color: transparent transparent #ff3d00 #ff3d00;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotationBack 0.5s linear infinite;
    transform-origin: center center;
  }
  :before {
    width: 80px;
    height: 80px;
    border-color: #fff #fff transparent transparent;
    animation: rotation 1.5s linear infinite;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
