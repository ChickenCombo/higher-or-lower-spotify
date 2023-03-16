import { useState } from 'react';
import Home from './pages/Home';
import Game from './pages/Game';

const App = () => {
  const [isHomeVisible, setHomeVisibility] = useState<boolean>(true);

  const handleStart = () => {
    setHomeVisibility((value) => !value);
  };

  return (
    /*
    <>
      /*{isHomeVisible && <Home handleStart={handleStart} />}
      {!isHomeVisible && <Game />}
    </>
    */
    <>
      <Game />
    </>
  );
};

export default App;
