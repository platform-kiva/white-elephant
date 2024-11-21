import styled from "styled-components";
import { motion } from "framer-motion";

export const RulesPageContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 100%;
    justify-content: center;
    padding: 48px;
    width: 100%;

    div {
        max-width: 640px;
        width: 100%;
    }
`
export const ContentContainer = styled.div`
    align-items: start;
    backdrop-filter: blur(10px);
    background: rgba(255,255,255,0.0);
    border: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    h2 {
        padding: 24px 0px;
        text-align: center;
        width: 100%;
    }
`
export const RulesContainer = styled.div`
    border: 2px solid rgba(255,255,255,0.25);
    border-radius: 8px;
    box-sizing: border-box;
    padding: 16px;
`
export const BtnContainer = styled(motion.div)`
    display: flex;
    gap: 8px;
    width: 100%;
`