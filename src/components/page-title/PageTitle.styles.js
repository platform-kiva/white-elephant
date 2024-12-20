import styled from "styled-components";
import { motion } from "framer-motion";
import { size } from "../../media-breakpoints";

export const PageTitleContainer = styled(motion.h1)`
    text-align: center;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    @media (max-width: ${size.mobileL}) {
        font-size: 40px;
    }
`