import styled from "styled-components";

export const PlayersDisplayContainer = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100vh;
    justify-content: center;
    padding: 24px;
    position: relative;
    text-align: center;
    width: 200px;
`
export const GameLogoContainer = styled.div`
    position: absolute;
    top: 24px;
    width: 100%;
`
export const GameHistoryContainer = styled.div`
    width: 100%;
`
export const BtnContainer = styled.div`
    bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 160px;
    position: absolute;
    width: 90%;
`
export const PlayerNamesContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const PlayerContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 5px;
    opacity: ${props => props.$isActive ? '1.0' : '0.5'};

    h2 {
        font-size: ${props => props.$isActive ? '18px' : '12px'};
    }
`
export const TurnIcon = styled.img`
    height: 24px;
`