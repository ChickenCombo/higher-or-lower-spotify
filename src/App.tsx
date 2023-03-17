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

  let gameComponent;

  if (hasGameStarted) {
    gameComponent = <Home handleStart={handleStart} />;
  } else if (hasUserLost) {
    gameComponent = (
      <Lost
        setHasGameStarted={setHasGameStarted}
        setHasUserLost={setHasUserLost}
      />
    );
  } else {
    gameComponent = <Game setHasUserLost={setHasUserLost} />;
  }

  return <>{gameComponent}</>;
};

export default App;
