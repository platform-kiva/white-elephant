import styled from "styled-components";
import { motion } from "framer-motion";

export const BtnContainer = styled(motion.button)`
    background: none;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: ${props => props.$isActive ? 'pointer' : ''};
    height: 40px;
    opacity: ${props => props.$isActive ? '1.0' : '0.2'};
    position: relative;
    transition: 0.2s ease-out;
    width: 100%;

    h4 {
        margin: 10px;
    }

    ${props => props.$isActive && `
        &:hover {
            background: ${props.$isCritical ? "darkred" : "#FFFFFF"};
            color: ${props.$isCritical ? "#FFFFFF" : "#000000"};
            transform: scale(1.05);
            transition: 0.2s ease-in;
        }
`};
`