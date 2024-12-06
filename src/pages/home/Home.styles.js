import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    height: 100%;
    position: relative;
    width: 100%;
`
export const OutletContainer = styled.div`
    box-sizing: border-box;
    height: fit-content;
    padding: 48px;
    position: relative;
    width: 100%;

    @media (max-width: 500px) {
        padding: 24px 12px;
    }
`
export const Background = styled.div`
    background-color: #232c3b;
    background-size: auto 200px;
    background-repeat: no-repeat;
    height: 100vh;
    position: fixed;
    width: 100vw;
    z-index: -100;
`
export const ImgContainer = styled.div`
    display: flex;
    height: 100%;
    opacity: 0.0;
    pointer-events: none;
    position: absolute;
    width: 100%;
`
export const PresentImg = styled.img`
    height: 20px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`