import styled from "styled-components";

export const PresentsDisplayContainer = styled.div`
    box-sizing: border-box;
    align-content: center;
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    justify-content: space-evenly;
    padding-left: ${props => props.$endOfGame ? "0px" : "232px"};
    max-width: 1200px;
    min-height: ${props => props.$endOfGame ? "fit-content" : "calc(100vh - 96px)"};
    position: ${props => props.$endOfGame ? "" : "absolute"};
    top: 0;
    width: 100%;
    
    @media (max-width: 500px) {
        margin: 24px 0px;
    }
`