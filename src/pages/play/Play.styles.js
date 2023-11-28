import styled from "styled-components";

export const PlayContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.$gameIsOver ? 'column' : 'row'};
    width: 100vw;
`
export const EndOfGameHeader = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 50px 0px;
`