import { BrowserRouter, Routes, Route } from 'react-router-dom';

// styles
import './App.css';

// pages
import AddPlayersPage from './pages/add-players-page/AddPlayersPage';
import AddPresentsPage from './pages/add-presents-page/AddPresentsPage';
import Home from './pages/home/Home';
import LandingPage from './pages/landing-page/LandingPage';
import Play from './pages/play/Play';
import PlayerShufflePage from './pages/player-shuffle-page/PlayerShufflePage';
import RulesPage from './pages/rules-page/RulesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='rules' element={<RulesPage />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/add-players' element={<AddPlayersPage />} />
          <Route path='/add-presents' element={<AddPresentsPage />} />
          <Route path='shuffle-players' element={<PlayerShufflePage />} />
          <Route path='play' element={<Play />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
