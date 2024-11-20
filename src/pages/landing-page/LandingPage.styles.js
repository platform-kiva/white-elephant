import styled from "styled-components";
import { motion } from "framer-motion";

export const LandingPageContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
    justify-content: center;
    width: 100%;
`
export const GameLogoContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 376px;
    width: 90%;
`
export const BtnContainer = styled(motion.div)`
    width: 100%;
`