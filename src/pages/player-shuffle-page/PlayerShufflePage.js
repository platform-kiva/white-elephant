import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { shufflePlayers } from '../../store/players/players.action';
import { setGameIsStarted, setShuffleStatus } from '../../store/game/game.action';
import { selectShuffleStatus } from '../../store/game/game.selector';
import { selectPlayerData } from '../../store/players/players.selector';
import { fadeInUp } from '../../animations/Animations.js';

// styles
import {
    PlayerShufflePageContainer,
    ContentContainer,
    PlayersListContainer,
    PlayerItem,
    ActionBtnsContainer,
    ActionBtn
} from './PlayerShufflePage.styles.js';

// components
import Btn from '../../components/btn/Btn';
import PageTitle from '../../components/page-title/PageTitle.js';
import { useEffect } from 'react';

export default function PlayerShufflePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const playerData = useSelector(selectPlayerData);
    const shuffleStatus = useSelector(selectShuffleStatus);

    useEffect(() => {
        if (playerData.length === 0) {
            navigate("/add-players");
        }
    }, [playerData, navigate])

    const handleShuffle = () => {
        dispatch(shufflePlayers(playerData));
        dispatch(setShuffleStatus(true));
    }

    const handleAddMore = () => {
        dispatch(setShuffleStatus(false));
        navigate('/add-players');
    }

    const handleStartGame = () => {
        if (shuffleStatus) {
            dispatch(setGameIsStarted(true));
            navigate("/play")
        }
    }

    return (
        <PlayerShufflePageContainer>
            <PageTitle title={"Step 3: Shuffle Players"} />
            <ContentContainer>
                <PlayersListContainer
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    custom={2 * 0.05}
                >
                    {playerData.map((player, index) => (
                        <PlayerItem
                            key={playerData.length - 1 - index}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            custom={index * 0.1}
                        >
                            <span>{player.name}</span>
                        </PlayerItem>
                    ))}
                </PlayersListContainer>
                <ActionBtnsContainer
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    custom={3 * 0.05}
                >
                    <ActionBtn onClick={handleAddMore}>
                        <Btn label={"+ ADD MORE"} />
                    </ActionBtn>
                    <ActionBtn onClick={handleShuffle}>
                        <Btn label={"SHUFFLE"} />
                    </ActionBtn>
                    <ActionBtn onClick={handleStartGame}>
                        <Btn label={"NEXT"} isActive={shuffleStatus ? true : false} />
                    </ActionBtn>
                </ActionBtnsContainer>
            </ContentContainer>
        </PlayerShufflePageContainer>
    )
}
