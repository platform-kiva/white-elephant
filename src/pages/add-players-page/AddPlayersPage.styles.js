import styled from 'styled-components';

export const AddPlayersPageContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 48px;
`;
export const ContentContainer = styled.div`
    align-items: start;
    backdrop-filter: blur(10px);
    background: rgba(255,255,255,0.0);
    border: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const InputContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    gap: 8px;
    width: 100%;

`;
export const NameInput = styled.input`
        background: none;
        border: 2px solid rgba(255,255,255,0.25);
        border-radius: 8px;
        box-sizing: border-box;
        color: #FFFFFF;
        flex-grow: 1;
        font-size: 16px;
        font-weight: 600;
        height: 41px;
        padding: 8px;
        padding-left: 16px;

        &::placeholder {
            color: #FFFFFF;
            font-weight: 600;
            opacity: 0.8;
        }

        &:focus {
            border: 2px solid rgba(255,255,255,1.0);
            outline: none;
        }
`

export const PlayersListContainer = styled.div`
    border: 2px solid rgba(255,255,255,0.25);
    border-radius: 8px;
    box-sizing: border-box;
    height: 500px;
    overflow-y: scroll;
    padding: 8px;
    width: 420px;
`;

export const PlayerItem = styled.div`
    background: rgba(255,255,255,0.25);
    border: 2px solid rgba(255,255,255,0.25);
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 8px;

    span {
        font-size: 18px;
        font-weight: 700;

    }

    button {
        background: none;
        border: 1px solid #FFFFFF;
        border-radius: 50%;
        box-sizing: border-box;
        color: white;
        cursor: pointer;
        font-size: 12px;
        height: 20px;
        padding: 2px 0px;
        text-align: center;
        transition: 0.2s ease-in-out;
        width: 20px;

        &:hover {
            background-color: darkred;
            transition: 0.2s ease-in-out;
        }
    }
`;
export const BtnContainer = styled.div`
    display: flex;
    gap: 8px;
    width: 100%;
`