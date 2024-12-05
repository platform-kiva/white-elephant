import styled from "styled-components";

export const PlayContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: ${props => props.$gameIsOver ? 'column' : 'row'};
    height: 100%;
    justify-content: center;
    position: relative;
    width: 100%;

    @media (min-width: 500px) {
        min-height: calc(100vh - 96px);
    }
    @media (max-width: 500px) {
        min-height: calc(100vh - 48px);
    }
`