import styled from "styled-components";
import { motion } from "framer-motion";

export const NotificationContainer = styled(motion.div)`
    backdrop-filter: blur(2px);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`
export const NotificationContent = styled(motion.div)`
    backdrop-filter: blur(10px);
    background-color: rgba(0,0,0,0.6);
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
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

    img {
        max-height: 600px;
        max-width: 300px;
    }
`
export const NotificationText = styled(motion.h3)`
    font-size: 24px;
    font-weight: 500;
    padding: 8px 0px;
`
export const BtnContainer = styled(motion.div)`
    display: flex;
    gap: 8px;
    width: 100%;
`