import styled from "styled-components";
import { motion } from "framer-motion";

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
    width: 220px;
`
export const GameLogoContainer = styled.div`
    width: 100%;
`
export const GameHistoryContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
    width: 100%;
`
export const BtnContainer = styled(motion.div)`
    width: 100%;
`
export const PlayerNamesContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const PlayerContainer = styled(motion.div)`
    align-items: center;
    display: flex;  
    flex-direction: column;
    gap: 8px;

    h2 {
        font-size: ${props => props.$isActive ? '24px' : '16px'};
        font-family: 'Roboto';
        opacity: ${props => props.$isActive ? '1.0' : '0.5'};
    }

    h3 {
        border: 1px solid #FFFFFF;
        border-radius: 100px;
        font-family: 'Roboto Condensed';
        font-weight: 500;
        margin-bottom: 8px;
        margin-top: 16px;
        padding: 4px 16px;
    }
`
export const PlayerName = styled.div`
    align-items: center;
    display: flex;
    gap: 8px;
`
export const TurnIcon = styled.img`
    height: 24px;
`