import { Route, Routes } from 'react-router-dom';
import Game from './pages/Game/Game';
import Main from './pages/Main/Main';
import PreparationForGame from './pages/PreparationForGame/PreparationForGame';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/preparation-for-game' element={<PreparationForGame />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </div>
  );
}

export default App; 
