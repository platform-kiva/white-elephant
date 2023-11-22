import { useDispatch, useSelector } from 'react-redux'
import { shufflePlayers } from '../../store/players/players.action';
import { setShuffleStatus } from '../../store/game/game.action';
import { selectShuffleStatus } from '../../store/game/game.selector'
import { selectPlayers } from '../../store/players/players.selector'

// styles
import './PlayerShufflePage.scss'

// components
import Btn from '../../components/btn/Btn';
import GameLogo from '../../components/game-logo/GameLogo'

export default function PlayerShufflePage() {
    const dispatch = useDispatch()
    const players = useSelector(selectPlayers);
    const shuffleStatus = useSelector(selectShuffleStatus)

    const handleShuffle = () => {
        dispatch(shufflePlayers(players))
        dispatch(setShuffleStatus())
    }

    return (
        <div className='player-shuffle-page-container'>
            <GameLogo size={"regular"}/>
            <div className='players-display'>
                {players.map((player) => (
                    <h1 key={player.playerName}>{player.playerName}</h1>
                ))}
            </div>
            <div className='action-btns-container'>
                <div onClick={() => handleShuffle()}>
                    <Btn label={"SHUFFLE"} />
                </div>
                <div>
                    <Btn label={"NEXT"} isActive={shuffleStatus ? true : false} navTo={'/play'} />
                </div>
            </div>
        </div>
    )
}
