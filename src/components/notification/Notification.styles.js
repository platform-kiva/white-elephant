import styled from "styled-components";
import { motion } from "framer-motion";

export const NotificationContainer = styled(motion.div)`
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 8px;
    left: 50%;
    max-width: 320px;
    padding: 8px 8px;
    position: absolute;
    text-align: center;
    top: 48px;
    transform: translateX(-50%);
    -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
    
    h3 {
        font-size: 12px;
        font-weight: 500;
    }
`