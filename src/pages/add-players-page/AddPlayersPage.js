import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlayerData } from '../../store/players/players.selector'; // Ensure this selector is defined
import { addPlayer, removePlayer } from '../../store/players/players.action'; // Define actions for adding/removing players

// styles
import {
    AddPlayersPageContainer,
    ContentContainer,
    InputContainer,
    PlayersListContainer,
    PlayerItem,
    BtnContainer,
    NameInput
} from './AddPlayersPage.styles.js';

// components
import Btn from '../../components/btn/Btn.js';

export default function AddPlayersPage() {
    const dispatch = useDispatch();
    const playerData = useSelector(selectPlayerData); // Get player data from Redux store
    const [playerName, setPlayerName] = useState(''); // For the input value

    const handleAddPlayer = () => {
        if (playerName.trim()) {
            dispatch(addPlayer(playerData, playerName.trim())); // Dispatch action to add player
            setPlayerName(''); // Clear input field after adding
        }
    };

    const handleInputChange = (e) => {
        setPlayerName(e.target.value);
    };

    const handleRemovePlayer = (index) => {
        dispatch(removePlayer(playerData, index)); // Dispatch action to remove player by index
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && playerName.trim()) {
            if (playerName.trim()) {
                dispatch(addPlayer(playerData, playerName.trim())); // Dispatch action to add player
                setPlayerName(''); // Clear input field after adding
            }
        }
    };

    return (
        <AddPlayersPageContainer>
            <h1>Add Players</h1>
            <ContentContainer>
                <InputContainer>
                    <NameInput
                        type="text"
                        value={playerName}
                        onChange={handleInputChange}
                        placeholder="Enter player name..."
                        onKeyDown={handleKeyDown}
                    />
                    <div style={{ width: "100px" }} onClick={handleAddPlayer}>
                        <Btn label={"ADD"} />
                    </div>
                </InputContainer>

                <PlayersListContainer>
                    {[...playerData].reverse().map((player, index) => (
                        <PlayerItem key={playerData.length - 1 - index}>
                            <span>{player.name}</span>
                            <button onClick={() => handleRemovePlayer(playerData.length - 1 - index)}>&#10005;</button>
                        </PlayerItem>
                    ))}
                </PlayersListContainer>
                <BtnContainer>
                    <Btn label={"BACK"} navTo={'/'} />
                    <Btn isActive={playerData.length > 0} label={"DONE"} navTo={'/add-presents'} />
                </BtnContainer>
            </ContentContainer>

        </AddPlayersPageContainer>
    );
}