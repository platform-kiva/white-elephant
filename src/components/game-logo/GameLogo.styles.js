import styled from "styled-components";

export const ContentContainer = styled.div`
    align-items: baseline;
    display: flex;
    gap: 10px;
`
export const CompanyLogo = styled.img`
    height: ${(props) =>
        props.$size === "regular"
        ? '100px'
        : '30px'};
`
export const WhiteElephantIcon = styled.img`
    height: ${(props) =>
        props.$size === "regular"
        ? '50px'
        : '20px'};
`