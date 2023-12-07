import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { shufflePlayers } from '../../store/players/players.action';
import { setShuffleStatus } from '../../store/game/game.action';
import { selectShuffleStatus } from '../../store/game/game.selector'
import { selectPlayers } from '../../store/players/players.selector'

// styles
import {
    PlayerShufflePageContainer,
    PlayersDisplay,
    ActionBtnsContainer
 } from './PlayerShufflePage.styles.js'

// components
import Btn from '../../components/btn/Btn';
import GameLogo from '../../components/game-logo/GameLogo'

export default function PlayerShufflePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const players = useSelector(selectPlayers);
    const shuffleStatus = useSelector(selectShuffleStatus);

    useEffect(() => {
        if (shuffleStatus) {
            navigate("/play")
        }
    }, [navigate, shuffleStatus])

    const handleShuffle = () => {
        dispatch(shufflePlayers(players))
        dispatch(setShuffleStatus())
    }

    return (
        <PlayerShufflePageContainer>
            <GameLogo size={"regular"}/>
            <PlayersDisplay>
                {players.map((player) => (
                    <h1 key={player.name}>{player.name}</h1>
                ))}
            </PlayersDisplay>
            <ActionBtnsContainer>
                <div onClick={() => handleShuffle()}>
                    <Btn label={"SHUFFLE"} />
                </div>
                <div>
                    <Btn label={"NEXT"} isActive={shuffleStatus ? true : false} navTo={'/play'} />
                </div>
            </ActionBtnsContainer>
        </PlayerShufflePageContainer>
    )
}
