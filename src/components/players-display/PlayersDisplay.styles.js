import styled from "styled-components";

export const PlayersDisplayContainer = styled.div`
    align-items: center;
    background-color: rgba(255,255,255,0.2);
    display: flex;
    flex-direction: column;
    height: 100vh;
    text-align: center;
    width: 200px;
`
export const GameLogoContainer = styled.div`
    margin: 24px 0px;
`
export const BtnContainer = styled.div`
    margin: 10px 0px;
    width: 90%;
`
export const PlayerNamesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const PlayerContainer = styled.div`
    opacity: ${props => props.$isActive ? '1.0' : '0.5'};

    h2 {
        font-size: ${props => props.$isActive ? '24px' : '16px'};
    }
`