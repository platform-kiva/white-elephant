import styled, { keyframes } from "styled-components";

const shakeAndTiltAnimation = keyframes`
  0%, 100% {
    transform: translateX(0) rotate(0);
  }
  25% {
    transform: translateX(-5px) rotate(-2deg);
  }
  50% {
    transform: translateX(5px) rotate(2deg);
  }
  75% {
    transform: translateX(-5px) rotate(-2deg);
  }
`;

export const PresentContainer = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 160px;
    margin: 20px;
    position: relative;
    width: 160px;
`
export const PresentUnopened = styled.div`

    img {
        height: 75%;
        width: 75%;
    }

    &:hover {
        animation: ${shakeAndTiltAnimation} 0.5s;
    }
`
export const PresentOpened = styled.div`
    align-items: center;
    background-color: rgba(${props => props.$bgCol}, 0.5);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: center;
    position: relative;
    width: 100%;
`
export const OwnerContainer = styled.div`
    border: 2px solid #FFFFFF;
    border-radius: 50px;
    bottom: 8px;
    position: absolute;

    h2 {
        font-size: 16px;
        margin: 5px 24px;
    }
`
export const PresentImgContainer = styled.div`
    display: flex;
    height: 50%;
    justify-content: center;
    position: absolute;
    top: -20px;
    width: 100%;

    img {
        height: 100%;
        object-fit: contain;
        max-width: 95%;
    }
`;
export  const PresentInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    text-align: center;

    h1 {
        font-family: 'Roboto Condensed';
        font-size: 12px;
        margin-bottom: 12px;
    }
    h2 {
        font-size: 10px;
    }
`