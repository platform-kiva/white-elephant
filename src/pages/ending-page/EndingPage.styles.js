import styled from "styled-components";
import { motion } from "framer-motion";

export const EndingPageContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: ${props => props.$gameIsOver ? 'column' : 'row'};
    gap: 24px;
    height: 100%;
    justify-content: center;
    position: relative;
    width: 100%;
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
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
`
export const VenmoTag = styled.img`
    width: 96px;
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