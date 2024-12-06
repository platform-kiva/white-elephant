import { fadeInUp } from '../../animations/Animations';
import { motion } from 'framer-motion';

// styles
import {
  RulesPageContainer,
  ContentContainer,
  RulesContainer,
  BtnContainer
} from './RulesPage.styles';

// components
import Btn from '../../components/btn/Btn';
import PageTitle from '../../components/page-title/PageTitle';

export default function RulesPage({ displayMode = false }) {
  return (
    <RulesPageContainer>
      <PageTitle title={"Welcome to White Elephant!"} />
      <ContentContainer>
        <RulesContainer>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={2 * 0.05}
            style={{ width: "100%" }}
          >
            <h2>HOW TO PLAY</h2>

          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={3 * 0.05}
            style={{ width: "100%" }}
          >
            <h3>Gift Guidelines</h3>
            <ul>
              <li>Each participant contributes a gift.</li>
              <li>Set a budget to keep gifts equitable.</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={4 * 0.05}
            style={{ width: "100%" }}
          >
            <h3>Game Setup</h3>
            <ul>
              <li>This game is designed to be played on the largest screen you can find</li>
              <li>The <b>Game Organizer</b> enters all participant names, and uploads an image and title for each participant's gift.</li>
              <li>Once all players and gifts are entered, the <b>Game Organizer</b> may shuffle the player list to randomly generate the playing order.</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={5 * 0.05}
            style={{ width: "100%" }}
          >
            <h3>Playing the Game</h3>
            <ul>
              <li>The first player chooses a gift from the screen display.</li>
              <li>The <b>Game Organizer</b> reveals what the gift is by clicking on it.</li>
              <li>Subsequent participants may either:</li>
              <ul>
                <li>Steal a previously chosen gift <em><b>OR</b></em> select a new gift.</li>
              </ul>
              <li>If a gift is stolen:</li>
              <ul>
                <li>The person whose gift was stolen must choose another gift (either a new one or steal from someone else).</li>
              </ul>
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={6 * 0.05}
            style={{ width: "100%" }}
          >
            <h3>Rules for Stealing:</h3>
            <ul>
              <li>A gift that has been stolen cannot be immediately stolen back</li>
              <li>Any gift can only be stolen a maximum of 3 times</li>
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={7 * 0.05}
            style={{ width: "100%" }}
          >
            <div>
              <h3>Repeat</h3>
              <ul>
                <li>Repeat until all players have gone.</li>
                <li>After the last player has taken their turn, the first player will get one last opportunity to steal a gift before the game concludes.</li>
              </ul>
            </div>
          </motion.div>
        </RulesContainer>
      </ContentContainer>
      {!displayMode &&
        <BtnContainer
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={8 * 0.05}
          style={{ width: "100%" }}
        >
          <Btn label={"BACK"} navTo={'/'} />
          <a
            href="/rules-read-mode"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', width: '100%' }} // Optional: match existing styles
          >
            <Btn label={"OPEN IN NEW TAB"} />
          </a>
        </BtnContainer>
      }
    </RulesPageContainer>
  )
}
