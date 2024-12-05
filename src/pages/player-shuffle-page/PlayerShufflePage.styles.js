import styled from "styled-components";
import { motion } from "framer-motion";

export const PlayerShufflePageContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 100%;
    justify-content: center;
    width: 100%;
`
export const PlayersListContainer = styled(motion.div)`
    border: 2px solid rgba(255,255,255,0.25);
    border-radius: 8px;
    box-sizing: border-box;
    height: 500px;
    max-width: 500px;
    overflow-y: scroll;
    padding: 8px;
    width: 100%;
`;
export const PlayerItem = styled(motion.div)`
    align-items: center;
    background: rgba(255,255,255,0.25);
    border: 2px solid rgba(255,255,255,0.25);
    border-radius: 8px;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    padding: 8px;
    
    span {
        font-size: 18px;
        font-weight: 700;

    }

    button {
        background: none;
        border: 1px solid #FFFFFF;
        border-radius: 50%;
        box-sizing: border-box;
        color: white;
        cursor: pointer;
        font-size: 12px;
        height: 20px;
        padding: 2px 0px;
        text-align: center;
        transition: 0.2s ease-in-out;

        &:hover {
            background-color: darkred;
            transition: 0.2s ease-in-out;
        }
    }
`;
export const ActionBtnsContainer = styled(motion.div)`
    display: flex;
    gap: 16px;
    width: 100%;

    @media (max-width: 500px) {
        gap: 12px;
    }
`
export const ActionBtn = styled.div`
    width: 100%;
`