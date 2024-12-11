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


const gradientColors = [
    '#232c3b', // Night
    '#2e3a4e', // Early Dawn
    '#3e5671', // Morning
    '#5d82a3', // Late Morning
    '#7fb4d1', // Noon Sky
    '#9ccae2', // Light Blue Sky
];


export default function ModeControl() {
    const dispatch = useDispatch();
    const [sliderValue, setSliderValue] = useState(50);
    const backgroundColor = gradientColors[Math.floor((sliderValue / 100) * (gradientColors.length - 1))];

    useEffect(() => {
        dispatch(setBackgroundColor(backgroundColor));
    }, [dispatch, backgroundColor])

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
