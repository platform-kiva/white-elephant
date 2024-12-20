import styled from "styled-components";
import { motion } from "framer-motion";

export const LandingPageContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: calc(100vh - 96px);
    justify-content: center;
    width: 100%;

    @media (max-width: 500px) {
        height: calc(100vh - 24px);
    }
`
export const GameLogoContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 280px;
    width: 90%;
`
export const BtnContainerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`
export const BtnContainer = styled(motion.div)`
    max-width: 500px;
    width: 100%;
`