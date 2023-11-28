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
    height: 350px;
    margin: 20px;
    position: relative;
    width: 250px;
`
export const PresentUnopened = styled.div`
    img {
        height: 100%;
        width: 100%;
    }

    &:hover {
        animation: ${shakeAndTiltAnimation} 0.5s;
    }
`
export const PresentOpened = styled.div`
    align-items: center;
    background-color: rgba(255,255,255,0.2);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 100%;
    justify-content: center;
    width: 100%;
`
export const OwnerContainer = styled.div`
    border: 2px solid #FFFFFF;
    border-radius: 50px;

    h2 {
        font-size: 16px;
        margin: 5px 24px;
    }
`
export const PresentCoverImgContainer = styled.div`
    img {
        height: 150px;
    }
`
export  const PresentInfo = styled.div`
    text-align: center;

    h1 {
        font-size: 24px;
        margin-bottom: 12px;
    }
    h2 {
        font-size: 16px;
    }
`
export const DisplayedText = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 12px;

    h2 {
        font-size: 16px;
    }
`