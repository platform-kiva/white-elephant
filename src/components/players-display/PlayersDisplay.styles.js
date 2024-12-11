import styled from "styled-components";
import { motion } from "framer-motion";

export const PlayersDisplayContainer = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: start;
    position: fixed;
    text-align: center;
    width: 220px;
    z-index: 1;

    @media (max-width: 500px) {
        left: 12px;
        min-height: calc(100vh - 24px);
        top: 12px;
    }
    @media (min-width: 500px) {
        left: 48px;
        min-height: calc(100vh - 96px);
        top: 48px;
    }
`
export const GameLogoContainer = styled.div`
    width: 100%;
`
export const GameHistoryContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
`
export const BtnContainer = styled(motion.div)`
    width: 100%;
`
export const PlayerNamesContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-height: calc(100vh - 96px);
    overflow-y: scroll;
    width: 100%;

    @media (max-width: 500px) {
        max-height: calc(100vh - 48px);
    }
`
export const PlayerContainer = styled(motion.div)`
    align-items: center;
    background: rgba(0,0,0,0.25);
    border: ${props => props.$isActive ? '2px solid #FFFFFF80' : ''};
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;  
    flex-direction: column;
    height: fit-content;
    justify-content: center;
    width: 100%;

    h3 {
        border-bottom: 2px solid #FFFFFF80;
        border-radius: 8px 8px 0px 0px;
        box-sizing: border-box;
        font-family: 'Roboto Condensed';
        font-size: 12px;
        font-weight: 700;
        padding: 8px 0px;
        width: 100%;
    }
`
export const PlayerName = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    gap: 8px;
    justify-content: ${props => props.$isActive ? 'space-between' : 'center'};;
    padding: 0px 8px;
    width: 100%;

    h2, h4 {
        color: ${props => props.$isActive ? '#FFFFFF' : '#FFFFFF80'};
        font-family: 'Roboto';
    }
    h2 {
        font-size: ${props => props.$isActive ? '16px' : '12px'};
        padding: 8px 0px;
    }
    h4 {
        font-size: ${props => props.$isActive ? '16px' : '12px'};
        margin: 8px 0px;
    }
`
export const PlayerInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const TurnIcon = styled.img`
    height: 24px;
`