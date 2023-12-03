import { useSelector } from 'react-redux'
import { OwnerContainer, PresentContainer, PresentCoverImgContainer, PresentInfo, PresentOpened, PresentUnopened } from './Present.styled.js'
import { selectPlayers } from '../../store/players/players.selector.js'
import { selectGameIsOver } from '../../store/game/game.selector.js'

export default function Present({ present }) {
    const players = useSelector(selectPlayers)
    const gameIsOver = useSelector(selectGameIsOver)

    return (
        <PresentContainer>
            {present.ownerHistory.length !== 0 ?
                <PresentOpened>
                    <PresentCoverImgContainer>
                        <img src={present.presentImg} alt='present cover img'/>
                    </PresentCoverImgContainer>
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
