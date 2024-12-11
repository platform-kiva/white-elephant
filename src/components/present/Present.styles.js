import styled, { keyframes } from "styled-components";
import { size } from "../../media-breakpoints";

export const HoverButtons = styled.div`
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    gap: 8px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    button {
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;

        .invisible {
            background: pink;
            height: 500px;
        }

        &:hover {
            background-color: rgba(255, 255, 255, 0.9);
            color: #000;
        }

        @media (max-width: ${size.mobileL}) {
            padding: 6px 12px;
            font-size: 10px;
        }
    }
`;

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
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    height: 160px;
    margin: 48px 16px;
    position: relative;
    width: 160px;

    @media (max-width: ${size.mobileL}) {
        height: 80px;
        width: 80px;
    }
`;

export const PresentUnopened = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;

    img {
        height: 75%;
        width: 75%;
    }

    &:hover {
        animation: ${shakeAndTiltAnimation} 0.5s;
    }

    &:hover ${HoverButtons} {
        opacity: 1;
        visibility: visible;
    }
`;

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

    &:hover ${HoverButtons} {
        opacity: 1;
        visibility: visible;
    }
`;

export const OwnerContainer = styled.div`
    border: 2px solid #FFFFFF;
    border-radius: 50px;
    bottom: 8px;
    position: absolute;

    h2 {
        font-size: 16px;
        margin: 5px 24px;
    }
`;

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

export const PresentInfo = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    padding: 0px 4px;
    text-align: center;
    width: 100%;

    h1 {
        font-family: 'Roboto Condensed';
        font-size: 12px;
        margin-bottom: 12px;
        max-width: 100%;
        overflow-x: hidden;
        position: relative;
    }

    h2 {
        border: 1px solid #FFFFFF;
        border-radius: 100px;
        font-size: 10px;
        max-width: 80px;
        padding: 2px 4px;
        overflow-x: hidden;
    }
`;