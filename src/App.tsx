import { Route, Routes } from 'react-router-dom';
import Game from './pages/Game/Game';
import Main from './pages/Main/Main';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </div>
  );
}

export default App; 
