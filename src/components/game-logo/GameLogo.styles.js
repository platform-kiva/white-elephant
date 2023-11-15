import styled from "styled-components";

export const ContentContainer = styled.div`
    align-items: baseline;
    display: flex;
    gap: 8px;
`
export const CompanyLogo = styled.img`
    height: ${(props) =>
        props.$size === "regular"
        ? '60px'
        : '40px'};
`
export const WhiteElephantIcon = styled.img`
    height: ${(props) =>
        props.$size === "regular"
        ? '48px'
        : '32px'};
`