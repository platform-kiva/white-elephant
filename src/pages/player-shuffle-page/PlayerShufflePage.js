import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { shufflePlayers } from '../../store/players/players.action';
import { setShuffleStatus } from '../../store/game/game.action';
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

export default function PlayerShufflePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const playerData = useSelector(selectPlayerData);
    const shuffleStatus = useSelector(selectShuffleStatus);

    const handleShuffle = () => {
        dispatch(shufflePlayers(playerData));
        dispatch(setShuffleStatus(true));
    }

    const handleAddMore = () => {
        dispatch(setShuffleStatus(false));
        navigate('/add-players');
    }

    return (
        <PlayerShufflePageContainer>
            <PageTitle title={"Shuffle Playing Order"} />
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
                    <ActionBtn onClick={() => handleShuffle()}>
                        <Btn label={"SHUFFLE"} />
                    </ActionBtn>
                    <ActionBtn>
                        <Btn label={"NEXT"} isActive={shuffleStatus ? true : false} navTo={'/play'} />
                    </ActionBtn>
                </ActionBtnsContainer>
            </ContentContainer>
        </PlayerShufflePageContainer>
    )
}
