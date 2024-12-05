import styled from "styled-components";

export const ContentContainerWrap = styled.div`
    align-items: center;
    backdrop-filter: blur(10px);
    border: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 500px;
    width: 100%;

    @media (max-width: 500px) {
        gap: 12px;
    }
`