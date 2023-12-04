import { useSelector } from 'react-redux'
import { selectPlayers } from '../../store/players/players.selector.js'
import { selectGameIsOver } from '../../store/game/game.selector.js'

// styles
import {
    OwnerContainer,
    PresentContainer,
    PresentImgContainer,
    PresentInfo,
    PresentOpened,
    PresentUnopened
} from './Present.styled.js'

export default function Present({ present }) {
    const players = useSelector(selectPlayers)
    const gameIsOver = useSelector(selectGameIsOver)

    return (
        <PresentContainer>
            {present.ownerHistory.length !== 0 ?
                <PresentOpened>
                    <PresentImgContainer>
                        <img src={present.presentImg} alt='present cover img'/>
                    </PresentImgContainer>
                    <PresentInfo>
                        <h1>{present.name}</h1>
                        {!gameIsOver &&
                            <h2>Steals Left: {present.stealsLeft}</h2>
                        }
                    </PresentInfo>
                    <OwnerContainer>
                        <h2>{players[present.ownerHistory[present.ownerHistory.length - 1]].name}</h2>
                    </OwnerContainer>
                </PresentOpened>
                :
                <PresentUnopened>
                    <img src={present.coverImg} alt="gift graphic"/>
                </PresentUnopened>
            }
        </PresentContainer>
    )
}
