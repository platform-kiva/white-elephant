import styled from "styled-components";
import { motion } from "framer-motion";
import { size } from "../../media-breakpoints";

export const ContentContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 16px;
    font-family: 'Lobster';
    font-size: ${(props) => (props.$logoSize === "regular" ? "48px" : "20px")};
    user-select: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
                

    h1 {
        font-family: 'Lobster';


        @media (min-width: 500px) {
            font-size: ${(props) => (props.$logoSize === "regular" ? "48px" : "20px")};
        }
        

        @media (max-width: ${size.mobileL}) {
            font-size: ${(props) => (props.$logoSize === "regular" ? "40px" : "16px")};
        }
        @media (max-width: ${size.mobileM}) {
            font-size: ${(props) => (props.$logoSize === "regular" ? "32px" : "12px")};
        }
        @media (max-width: ${size.mobileS}) {
            font-size: ${(props) => (props.$logoSize === "regular" ? "28px" : "10px")};
        }
    }
`;

export const WhiteElephantIcon = styled(motion.img)`
    height: ${(props) => (props.$logoSize === "regular" ? "50px" : "20px")};

    @media (max-width: ${size.mobileL}) {
        height: ${(props) => (props.$logoSize === "regular" ? "40px" : "16px")};
    }

`;