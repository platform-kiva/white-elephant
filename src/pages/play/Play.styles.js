import styled from "styled-components";
import { motion } from "framer-motion";

export const PlayContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: ${props => props.$gameIsOver ? 'column' : 'row'};
    justify-content: space-between;
    width: 100vw;
`
export const ContentContainer = styled.div`
    box-sizing: border-box;
    padding: 48px;
`
export const EndOfGameHeader = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;

    p {
        max-width: 300px;
        text-align: center;
    }
`
export const VenmoContainer = styled(motion.div)`
    align-items: center;
    backdrop-filter: blur(10px);
    background: none;
    border: 2px solid rgba(255,255,255,0.25);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
`
export const VenmoTag = styled.img`
    height: 48px;
`
export const SummaryText = styled(motion.div)`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 8px;

    p {
        max-width: 480px;
    }
`