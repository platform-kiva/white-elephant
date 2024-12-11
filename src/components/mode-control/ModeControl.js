import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../store/game/game.action';

// styles
import {
    ModeControlContainer, Slider
} from './ModeControl.styles';

// assets
import moonIcon from '../../assets/moon-icon.svg';
import sunIcon from '../../assets/sun-icon.svg';

export default function ModeControl() {
    const dispatch = useDispatch();
    const [sliderValue, setSliderValue] = useState(50);


    useEffect(() => {
        dispatch(setBackgroundColor(sliderValue));
        console.log("hi")
    }, [dispatch, sliderValue])

    return (
        <ModeControlContainer>
            <img src={moonIcon} alt='dark mode' />
            <Slider
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(e.target.value)}
            />
            <img src={sunIcon} alt='light mode' />
        </ModeControlContainer>
    )
}
