import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { shufflePlayers } from '../../store/players/players.action';

// selectors
import { selectPlayers } from '../../store/players/players.selector'
import { selectTurnIndex } from '../../store/game/game.selector';


// styles
import './PlayersDisplay.scss'

export default function PlayersDisplay() {
  const [playersShuffled, setPlayersShuffled] = useState(false)
  const players = useSelector(selectPlayers);
  const turnIndex = useSelector(selectTurnIndex)
  const dispatch = useDispatch()

  const handleShuffle = () => {
    dispatch(shufflePlayers(players))
    setPlayersShuffled(true)
  }

  useEffect(() => {
    console.log('players were shuffled')
  },[playersShuffled])

  return (
    <div className='players-display-container' style={{ paddingTop: playersShuffled === false ? '20px' : '50px' }}>
      {playersShuffled === false &&
        <button onClick={() => handleShuffle()}>SHUFFLE</button>
      }
      {players.map((player) => (
        <div key={player.playerName} className={`player-container ${player.playerName === players[turnIndex].playerName ? 'player-container-active' : ''}`}>
          <h2 style={{ fontSize: player.playerName === players[turnIndex].playerName ? '24px' : '' }}>{player.playerName}</h2>
        </div>
      ))}
    </div>
  )
}
