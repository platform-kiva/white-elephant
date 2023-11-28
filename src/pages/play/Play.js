import { useSelector } from 'react-redux'
import { selectGameIsOver } from '../../store/game/game.selector'

// styles
import {
  PlayContainer,
  EndOfGameHeader
} from './Play.styles.js'

// components
import GameLogo from '../../components/game-logo/GameLogo.js'
import PlayersDisplay from '../../components/players-display/PlayersDisplay'
import PresentsDisplay from '../../components/presents-display/PresentsDisplay'

export default function Play() {
  const gameIsOver = useSelector(selectGameIsOver);
  
  return (
    <PlayContainer $gameIsOver={gameIsOver} >
        {!gameIsOver &&
          <PlayersDisplay/>
        }
        {gameIsOver &&
          <EndOfGameHeader>
            <GameLogo size={"regular"}/>
            <h2>Thanks for playing!</h2>
          </EndOfGameHeader>
        }
        <PresentsDisplay />
    </PlayContainer>
  )
}
