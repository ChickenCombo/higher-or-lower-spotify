import { getArtistList } from '@/utils/Artist';
import { Artist } from '@/utils/Types';
import CurrentScore from '@/components/CurrentScore';
import HighScore from '@/components/HighScore';
import LeftArtist from '@/components/LeftArtist';
import RightArtist from '@/components/RightArtist';
import { useState, useEffect, useContext } from 'react';
import { GameContext } from '@/App';

const Game = () => {
  const { setHasUserLost, score, setScore } = useContext(GameContext);

  const artistList: Array<Artist> = getArtistList();

  const getRandomArtist = () => {
    if (artistList.length == 0) {
      getArtistList();
    }

    const index = Math.floor(Math.random() * artistList.length);
    const artist = artistList[index];
    artistList.splice(index, 1);

    return artist;
  };

  const localStorage = window.localStorage;
  if (!localStorage.getItem('spotify-high-score')) {
    localStorage.setItem('spotify-high-score', '0');
  }

  const [leftArtist, setLeftArtist] = useState<Artist>(getRandomArtist());
  const [rightArtist, setRightArtist] = useState<Artist>(getRandomArtist());
  const [highScore, setHighScore] = useState<number>(
    Number(localStorage.getItem('spotify-high-score')),
  );

  useEffect(() => {
    const storedHighScore =
      Number(localStorage.getItem('spotify-high-score')) || 0;

    if (score > storedHighScore) {
      localStorage.setItem('spotify-high-score', score.toString());
      setHighScore(score);
    }
  }, [score]);

  const answer =
    parseInt(leftArtist.listeners) < parseInt(rightArtist.listeners);

  const guessAnswer = (guess: boolean) => {
    const win =
      answer === guess ||
      parseInt(leftArtist.listeners) === parseInt(rightArtist.listeners);

    if (win) {
      setScore((score) => score + 1);
      setLeftArtist(rightArtist);
      setRightArtist(getRandomArtist());
    } else {
      setHasUserLost(true);
    }
  };

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transform select-none rounded-full bg-white p-8 text-lg font-bold shadow-sm transition duration-200 hover:scale-105">
        VS
      </div>
      <div className="grid h-screen w-screen grid-rows-2 bg-gray-800 md:grid-cols-2">
        <div className="h-full w-full md:h-screen">
          <LeftArtist
            artist={leftArtist.artist}
            listeners={leftArtist.listeners}
            image_url={leftArtist.image_url}
          />
        </div>

        <div className="h-full w-full md:h-screen">
          <RightArtist
            artist={rightArtist.artist}
            listeners={rightArtist.listeners}
            image_url={rightArtist.image_url}
            guessAnswer={guessAnswer}
          />
        </div>

        <HighScore score={highScore} />
        <CurrentScore score={score} />
      </div>
    </>
  );
};

export default Game;
