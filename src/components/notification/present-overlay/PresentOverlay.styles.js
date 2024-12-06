import styled from "styled-components";
import { motion } from "framer-motion";

export const PresentOverlayContainer = styled(motion.div)`
    align-items: center;
    background-color: rgba(0,0,0,0.1);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255,255,255,0.4);
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    left: 50%;
    max-width: 600px;
    padding: 16px;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateX(-200%);
    user-select: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    width: 90%;
    z-index: 100;            
    
    h3 {
        font-size: 24px;
        font-weight: 500;
        margin: 0;
    }

    img {
        max-height: 600px;
        max-width: 300px;
    }
`
export const BtnContainer = styled(motion.div)`
    display: flex;
    width: 100%;
`