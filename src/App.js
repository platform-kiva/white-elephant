import { BrowserRouter, Routes, Route } from 'react-router-dom';

// styles
import './App.css';

// pages
import Home from './pages/home/Home';
import LandingPage from './pages/landing-page/LandingPage';
import Play from './pages/play/Play';
import PlayerShufflePage from './pages/player-shuffle-page/PlayerShufflePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='shuffle-players' element={<PlayerShufflePage />} />
          <Route path='play' element={<Play />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
