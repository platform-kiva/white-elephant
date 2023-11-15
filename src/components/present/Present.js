// styles
import './Present.scss'

export default function Present({ present }) {
  return (
    <div className='present-container'>
        {present.owner === null &&
            <div className='present-unopened'>
                <img src={present.coverImg} alt="gift graphic"/>
            </div>
        }
        {present.owner !== null && 
            <div className='present-opened'>

                <div className='present-cover-img-container'>
                    <img src={present.coverImg} alt='present cover img'/>
                </div>

                <div className='present-info'>
                    <h1>{present.presentTitle}</h1>
                    <h2>Steals Left: {present.stealsLeft}</h2>
                </div>

                <div className='owner-container'>
                    <h2>{present.owner.name}</h2>
                </div>
            </div>
        }



    </div>
  )
}
