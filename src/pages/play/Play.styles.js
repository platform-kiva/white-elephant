import styled from "styled-components";

export const PlayContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: ${props => props.$gameIsOver ? 'column' : 'row'};
    justify-content: space-evenly;
    width: 100vw;
`
export const EndOfGameHeader = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 48px;
`