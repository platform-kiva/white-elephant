import styled from "styled-components";

export const ContentContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 16px;

    h1 {
        font-family: 'Lobster';
        font-size: 48px;
    }
`
export const WhiteElephantIcon = styled.img`
    height: ${(props) => props.$size === "regular" ? '50px' : '20px'};
`