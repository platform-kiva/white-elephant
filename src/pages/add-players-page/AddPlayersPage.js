import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlayerData } from '../../store/players/players.selector';
import { addPlayer, removePlayer, resetPlayerHistory } from '../../store/players/players.action';
import { fadeInUp } from '../../animations/Animations.js';
import { resetGameState, setSystemNotification } from '../../store/game/game.action.js';
import { resetPresentsHistory } from '../../store/presents/presents.action.js';
import { selectPresentData } from '../../store/presents/presents.selector.js';

// styles
import {
    AddPlayersPageContainer,
    InputContainer,
    PlayersListContainer,
    PlayerItem,
    BtnContainer,
    NameInput
} from './AddPlayersPage.styles.js';

// components
import Btn from '../../components/btn/Btn.js';
import ContentContainer from '../../components/content-container/ContentContainer.js';
import PageTitle from '../../components/page-title/PageTitle.js';


export default function AddPlayersPage() {
    const dispatch = useDispatch();
    const playerData = useSelector(selectPlayerData);
    const presentData = useSelector(selectPresentData);
    const playerDataRef = useRef(playerData);
    const presentDataRef = useRef(presentData);
    const allUniqueNames = playerData.length === new Set(playerData.map(player => player.name)).size;
    const [playerName, setPlayerName] = useState('');

    useEffect(() => {
        playerDataRef.current = playerData;
        presentDataRef.current = presentData;
    }, [playerData, presentData]);

    useEffect(() => {
        dispatch(resetGameState());
        dispatch(resetPlayerHistory(playerDataRef.current));
        dispatch(resetPresentsHistory(presentDataRef.current));
    }, [dispatch]);

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

    useEffect(() => {
        if (!allUniqueNames) {
            const moveData = {
                text: "Name has been used already.",
                player1: null,
                player2: null,
                present1Name: null,
                present1Img: null,
                present2Name: null,
                present2Img: null,
                type: "message"
            }
            dispatch(setSystemNotification(moveData));
        }
    }, [dispatch, allUniqueNames])

    return (
        <AddPlayersPageContainer>
            <PageTitle title={"Step 1: Add Players"} />
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
                        <Btn label={"ADD"} isActive={playerName} />
                    </div>
                </InputContainer>

                <PlayersListContainer
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    custom={3 * 0.05}
                >
                    {[...playerData].reverse().map((player, index) => {
                        // Check if the current player name exists more than once
                        const isDuplicate =
                            playerData.filter(p => p.name === player.name).length > 1;

                        return (
                            <PlayerItem
                                key={playerData.length - 1 - index}
                                $isDuplicate={isDuplicate} // Pass the isDuplicate prop
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                                custom={index * 0.1}
                            >
                                <span>{player.name}</span>
                                <button onClick={() => handleRemovePlayer(playerData.length - 1 - index)}>&#10005;</button>
                            </PlayerItem>
                        );
                    })}
                </PlayersListContainer>
                <BtnContainer
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    custom={4 * 0.05}
                    style={{ width: "100%" }}
                >
                    <Btn label={"BACK"} navTo={'/'} />
                    <Btn isActive={(playerData.length > 0) && allUniqueNames} label={"DONE"} navTo={'/add-presents'} />
                </BtnContainer>
            </ContentContainer>

        </AddPlayersPageContainer>
    );
}