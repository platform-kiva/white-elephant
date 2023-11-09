import { BrowserRouter, Routes, Route } from 'react-router-dom';

// styles
import './App.css';

// pages
import Home from './pages/home/Home';
import Play from './pages/play/Play';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='play' element={<Play />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
