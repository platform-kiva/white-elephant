import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlayerData } from '../../store/players/players.selector';
import { addPlayer, removePlayer } from '../../store/players/players.action';
import { fadeInUp } from '../../animations/Animations.js';

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
import PageTitle from '../../components/page-title/PageTitle.js';

export default function AddPlayersPage() {
    const dispatch = useDispatch();
    const playerData = useSelector(selectPlayerData);
    const [playerName, setPlayerName] = useState('');

    const handleAddPlayer = () => {
        if (playerName.trim()) {
            dispatch(addPlayer(playerData, playerName.trim()));
            setPlayerName('');
        }
    };

    const handleInputChange = (e) => {
        setPlayerName(e.target.value);
    };

    const handleRemovePlayer = (index) => {
        dispatch(removePlayer(playerData, index));
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && playerName.trim()) {
            if (playerName.trim()) {
                dispatch(addPlayer(playerData, playerName.trim()));
                setPlayerName('');
            }
        }
    };

    return (
        <AddPlayersPageContainer>
            <PageTitle title={"Add Players"} />

            <ContentContainer>
                <InputContainer
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    custom={2 * 0.05}
                    style={{ width: "100%" }}
                >
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

                <PlayersListContainer
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    custom={3 * 0.05}
                >
                    {[...playerData].reverse().map((player, index) => (
                        <PlayerItem
                            key={playerData.length - 1 - index}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            custom={index * 0.1}
                        >
                            <span>{player.name}</span>
                            <button onClick={() => handleRemovePlayer(playerData.length - 1 - index)}>&#10005;</button>
                        </PlayerItem>
                    ))}
                </PlayersListContainer>
                <BtnContainer
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    custom={4 * 0.05}
                    style={{ width: "100%" }}
                >
                    <Btn label={"BACK"} navTo={'/'} />
                    <Btn isActive={playerData.length > 0} label={"DONE"} navTo={'/add-presents'} />
                </BtnContainer>
            </ContentContainer>

        </AddPlayersPageContainer>
    );
}