import styled from "styled-components";
import { motion } from "framer-motion";

export const AddPresentsPageContainer = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 48px;
`
export const ContentContainer = styled.div`
    align-items: start;
    backdrop-filter: blur(10px);
    background: rgba(255,255,255,0.0);
    border: none;
    display: flex;
    flex-direction: column;
    gap: 24px;
`
export const PresentImgUploadsContainer = styled(motion.div)`
    border: 2px solid rgba(255,255,255,0.25);
    border-radius: 8px;
    box-sizing: border-box;
    height: 500px;
    overflow-y: scroll;
    padding: 8px;
    width: 420px;
`
export const PresentItem = styled(motion.div)`
    background: rgba(255,255,255,0.25);
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 8px;
    padding: 8px;
    width: 100%;
    border: 2px solid rgba(255,255,255,0.25);
    border-radius: 8px;
    box-sizing: border-box;
    color: #FFFFFF;
    flex-grow: 1;
    font-size: 16px;
    font-weight: 600;
    padding: 8px;
    padding-left: 16px;

    &::placeholder {
        color: #FFFFFF;
        font-weight: 600;
        opacity: 0.8;
    }

    &:focus {
        border: 2px solid rgba(255,255,255,1.0);
        outline: none;
    }

    input[type="file"] {
        display: none;
    }

    .custom-file-upload {
        background-color: none;
        border: 2px solid #FFFFFF;
        border-radius: 8px;
        box-sizing: border-box;
        cursor: pointer;
        display: inline-block;
        font-size: 13.33px;
        font-weight: 700;
        height: 44px;
        line-height: 40px;
        text-align: center;

        &:hover {
            background: #FFFFFF;
            color: #000000;
            transform: scale(1.05);
            transition: 0.2s ease-in;
        }
    }

    
`
export const TextInput = styled.input`
    background: none;
    border: 2px solid rgba(255,255,255,0.25);
    border-radius: 8px;
    box-sizing: border-box;
    color: #FFFFFF;
    flex-grow: 1;
    font-size: 16px;
    font-weight: 600;
    height: 41px;
    padding: 8px;
    padding-left: 16px;

    &::placeholder {
        color: #FFFFFF;
        font-weight: 600;
        opacity: 0.8;
    }

    &:focus {
        border: 2px solid rgba(255,255,255,1.0);
        outline: none;
    }
`
export const BtnContainer = styled(motion.div)`
    display: flex;
    gap: 8px;
    width: 100%;
`