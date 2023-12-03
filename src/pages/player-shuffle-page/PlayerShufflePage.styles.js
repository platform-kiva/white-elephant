import styled from "styled-components";

export const PlayerShufflePageContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 48px;
    height: 100%;
    justify-content: space-evenly;
    width: 100%;
`
export const PlayersDisplay = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    height: 300px;
    max-width: 80%;
    text-align: center;
    width: fit-content;

    h1 {
        font-size: 24px;
        width: 200px;
    }
`
export const ActionBtnsContainer = styled.div`
    display: flex;
    gap: 24px;
`