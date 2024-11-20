import styled from "styled-components";

export const HomeContainer = styled.div`
    height: 100%;
    position: relative;
    width: 100%;
`
export const OutletContainer = styled.div`
    height: 100vh;
    position: absolute;
    width: 100vw;
`
export const Background = styled.div`
    background-size: auto 200px;
    background-repeat: no-repeat;
    background-color: #232c3b;
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