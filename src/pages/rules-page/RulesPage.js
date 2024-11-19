// styles
import {
    RulesPageContainer
} from './RulesPage.styles';

export default function RulesPage() {
  return (
    <RulesPageContainer>
        <h1>Welcome to White Elephant!</h1>
        <h2>Game Rules</h2>
        <h3>Gift Guidelines</h3>
        <ul>
          <li>Each participant contributes a gift.</li>
          <li>Set a budget (e.g., $20-$30) to keep gifts equitable.</li>
        </ul>
        <h3>Game Setup</h3>
        <ul>
          <li>The game organizer will enter all players, then upload a gift image matching the total number of players</li>
          <li>Once a players and gifts are entered, the game organizer will press shuffle to randomly generate the order</li>
        </ul>
        <h3>Playing the Game</h3>
        <ul>
          <li>The first participant chooses a gift from the screen display.</li>
          <li>The organizer reveals what the gift is by clicking on it.</li>
        </ul>
        <ul>
          <li>Subsequent participants can either:</li>
          <ul>
            <li>Steal a previously chosen gift, or</li>
            <li>Select a new gift</li>
            <li>If a gift is stolen:</li>
            <ul>
              <li>The person whose gift was stolen must choose another gift (either a new one or steal from someone else).</li>
            </ul>
            <li>Rules for Stealing:</li>
              <ul>
                <li>A gift that has been stolen cannot be immediately stolen back</li>
                <li>Any gift can only be stolen a maximum of 3 times</li>
              </ul>
          </ul>
        </ul>
        <ul>
          <li>Repeat</li>
        </ul>
    </RulesPageContainer>
  )
}
