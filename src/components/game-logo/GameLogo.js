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
    <ContentContainer $size={size}>
      <motion.h1
        initial="hidden"
        animate="visible"
        exit="hidden" // Exit animation
        variants={fadeInUp}
        custom={8 * 0.05}
      >
        White Elephant
      </motion.h1>
      <WhiteElephantIcon
        as={motion.img} // Ensure it uses motion features
        $size={size}
        src={whiteElephantIcon}
        alt="white elephant icon"
        initial="hidden"
        animate="visible"
        exit="hidden" // Exit animation
        variants={fadeInUp}
        custom={8 * 0.05}
      />
    </ContentContainer>
  );
}