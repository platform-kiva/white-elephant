// styles
import { OwnerContainer, PresentContainer, PresentCoverImgContainer, PresentInfo, PresentOpened, PresentUnopened } from './Present.styled.js'

export default function Present({ present }) {
  return (
    <PresentContainer>
        {present.owner === null &&
            <PresentUnopened>
                <img src={present.coverImg} alt="gift graphic"/>
            </PresentUnopened>
        }
        {present.owner !== null && 
            <PresentOpened>

                <PresentCoverImgContainer>
                    <img src={present.coverImg} alt='present cover img'/>
                </PresentCoverImgContainer>

                <PresentInfo>
                    <h1>{present.presentTitle}</h1>
                    <h2>Steals Left: {present.stealsLeft}</h2>
                </PresentInfo>

                <OwnerContainer>
                    <h2>{present.owner.name}</h2>
                </OwnerContainer>
            </PresentOpened>
        }
    </PresentContainer>
  )
}
