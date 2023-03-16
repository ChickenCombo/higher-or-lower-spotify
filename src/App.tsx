import { useState } from 'react';
import Home from './pages/Home';
import Game from './pages/Game';
import Lost from './pages/Lost';

const App = () => {
  const [hasGameStarted, setHasGameStarted] = useState<boolean>(true);
  const [hasUserLost, setHasUserLost] = useState<boolean>(false);

  const handleStart = () => {
    setHasGameStarted((value) => !value);
  };

  return (
    <>
      {hasGameStarted ? (
        <Home handleStart={handleStart} />
      ) : hasUserLost ? (
        <Lost
          setHasGameStarted={setHasGameStarted}
          setHasUserLost={setHasUserLost}
        />
      ) : (
        <Game setHasUserLost={setHasUserLost} />
      )}
    </>
  );
};

export default App;
