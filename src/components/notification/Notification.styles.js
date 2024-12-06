import styled from "styled-components";
import { motion } from "framer-motion";

export const NotificationContainer = styled(motion.div)`
    backdrop-filter: blur(10px);
    background-color: rgba(0,0,0,0.6);
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 8px;
    left: 50%;
    max-width: 320px;
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
    z-index: 100;            
    
    h3 {
        font-size: 24px;
        font-weight: 500;
        margin: 0;
    }
`
export const ProgressBar = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 0 0 8px 8px;
`;