import { useSelector } from 'react-redux';
import { selectBackgroundColor } from '../../store/game/game.selector';

// styles
import {
  BGContainer,
} from './BG.styles';


export default function BG() {
  const backgroundColor = useSelector(selectBackgroundColor);

  return (
      <BGContainer style={{ backgroundColor }} />
  );
}