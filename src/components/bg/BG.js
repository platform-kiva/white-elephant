import { useSelector } from 'react-redux';
import { selectBackgroundColor } from '../../store/game/game.selector';

// styles
import {
  BGContainer,
} from './BG.styles';

const gradientColors = [
  '#232c3b', // Night
  '#2e3a4e', // Early Dawn
  '#3e5671', // Morning
  '#5d82a3', // Late Morning
  '#7fb4d1', // Noon Sky
  '#9ccae2', // Light Blue Sky
];

export default function BG() {
  const backgroundColorVal = useSelector(selectBackgroundColor);
  const backgroundColor = gradientColors[Math.floor((backgroundColorVal / 100) * (gradientColors.length - 1))];

  return (
      <BGContainer style={{ backgroundColor }} />
  );
}