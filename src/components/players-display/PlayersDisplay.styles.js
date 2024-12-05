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
    background: rgba(255,255,255,0.25);
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
    display: flex;
    gap: 8px;

    h2 {
        color: ${props => props.$isActive ? '#FFFFFF' : '#FFFFFF50'};
        font-size: ${props => props.$isActive ? '16px' : '12px'};
        font-family: 'Roboto';
        /* opacity: ${props => props.$isActive ? '1.0' : '0.5'}; */
        padding: 8px 0px;
    }
`
export const TurnIcon = styled.img`
    height: 24px;
`