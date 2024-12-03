import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/Animations.js';

// styles
import {
  ContentContainer,
  WhiteElephantIcon,
} from './GameLogo.styles.js';

// assets
import whiteElephantIcon from '../../assets/white-elephant-icon.png';

export default function GameLogo({ size }) {
  return (
    <ContentContainer $logoSize={size}>
      <motion.h1
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeInUp}
        custom={2 * 0.05}
      >
        White Elephant
      </motion.h1>
      <WhiteElephantIcon
        as={motion.img}
        $logoSize={size}
        src={whiteElephantIcon}
        alt="white elephant icon"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeInUp}
        custom={2 * 0.05}
      />
    </ContentContainer>
  );
}