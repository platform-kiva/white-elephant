import styled from "styled-components";
import { motion } from "framer-motion";
import { size } from "../../media-breakpoints";

export const ContentContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    font-family: 'Lobster';
    user-select: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
`;

export const WhiteElephantIcon = styled(motion.img)`
    height: ${(props) => (props.$logoSize === "regular" ? "160px" : "120px")};

    @media (max-width: ${size.mobileL}) {
        height: ${(props) => (props.$logoSize === "regular" ? "120px" : "90px")};
    }

`;