import { useDispatch, useSelector } from 'react-redux'
import { shufflePlayers } from '../../store/players/players.action';
import { setShuffleStatus } from '../../store/game/game.action';
import { selectShuffleStatus } from '../../store/game/game.selector'
import { selectPlayers } from '../../store/players/players.selector'

// styles
import './PlayerShufflePage.scss'

// components
import GameLogo from '../../components/game-logo/GameLogo'
import PrimaryBtn from '../../components/primary-btn/PrimaryBtn';

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
                    <h1>{player.playerName}</h1>
                ))}
            </div>
            <div className='action-btns-container'>
                <div onClick={() => handleShuffle()}>
                    <PrimaryBtn label={"SHUFFLE"} />
                </div>
                <div>
                    <PrimaryBtn label={"NEXT"} isActive={shuffleStatus ? true : false} navTo={'/play'}/>
                </div>
            </div>
        </div>
    )
}
