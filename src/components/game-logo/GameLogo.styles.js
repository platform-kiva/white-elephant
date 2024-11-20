import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 16px;
    font-family: 'Lobster';
        font-size: ${(props) => (props.$size === "regular" ? "48px" : "20px")};
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;

    h1 {
        font-family: 'Lobster';
        font-size: ${(props) => (props.$size === "regular" ? "48px" : "20px")};
    }
`;

export const WhiteElephantIcon = styled(motion.img)`
    height: ${(props) => (props.$size === "regular" ? "50px" : "20px")};
    
`;