import { getArtistList } from '@/utils/Artist';
import { Artist, GameProps } from '@/utils/Types';
import CurrentScore from '@/components/CurrentScore';
import HighScore from '@/components/HighScore';
import LeftArtist from '@/components/LeftArtist';
import RightArtist from '@/components/RightArtist';
import { useState, useEffect } from 'react';

const Game = (props: GameProps) => {
  const { setHasUserLost } = props;

  const artistList: Array<Artist> = getArtistList();

  const getRandomArtist = () => {
    if (artistList.length == 0) {
      getArtistList();
    }

    return artistList.splice(
      Math.floor(Math.random() * (artistList.length - 1)),
      1,
    )[0];
  };

  const localStorage = window.localStorage;
  if (!localStorage.getItem('spotify-high-score')) {
    localStorage.setItem('spotify-high-score', '0');
  }

  const [leftArtist, setLeftArtist] = useState<Artist>(getRandomArtist());
  const [rightArtist, setRightArtist] = useState<Artist>(getRandomArtist());
  const [score, setScore] = useState<number>(0);
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

  const answer = parseInt(leftArtist.score) < parseInt(rightArtist.score);

  const guessAnswer = (guess: boolean) => {
    const win =
      answer === guess ||
      parseInt(leftArtist.score) === parseInt(rightArtist.score);

    if (win) {
      setScore((score) => score + 1);
      setLeftArtist(rightArtist);
      setRightArtist(getRandomArtist());
    } else {
      setScore(0);
      setHasUserLost(true);
    }
  };

  return (
    <div className="grid h-screen w-screen grid-rows-2 bg-gray-800 md:grid-cols-2">
      <div className="h-full w-full md:h-screen">
        <LeftArtist
          title={leftArtist.title}
          score={leftArtist.score}
          image_url={leftArtist.image_url}
        />
      </div>

      <div className="h-full w-full md:h-screen">
        <RightArtist
          title={rightArtist.title}
          score={rightArtist.score}
          image_url={rightArtist.image_url}
          guessAnswer={guessAnswer}
        />
      </div>

      <HighScore score={highScore} />
      <CurrentScore score={score} />
    </div>
  );
};

export default Game;
