import { getAnimeList } from '@/utils/Anime';
import { Anime, GameProps } from '@/utils/Types';
import CurrentScore from '@/components/CurrentScore';
import HighScore from '@/components/HighScore';
import LeftAnime from '@/components/LeftAnime';
import RightAnime from '@/components/RightAnime';
import { useState, useEffect } from 'react';

const Game = (props: GameProps) => {
  const { setHasUserLost } = props;

  const animeList: Array<Anime> = getAnimeList();

  const getRandomAnime = () => {
    if (animeList.length == 0) {
      getAnimeList();
    }

    return animeList.splice(
      Math.floor(Math.random() * (animeList.length - 1)),
      1,
    )[0];
  };

  const localStorage = window.localStorage;
  if (!localStorage.getItem('spotify-high-score')) {
    localStorage.setItem('spotify-high-score', '0');
  }

  const [leftAnime, setLeftAnime] = useState<Anime>(getRandomAnime());
  const [rightAnime, setRightAnime] = useState<Anime>(getRandomAnime());
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

  const answer = parseInt(leftAnime.score) < parseInt(rightAnime.score);

  const guessAnswer = (guess: boolean) => {
    const win =
      answer === guess ||
      parseInt(leftAnime.score) === parseInt(rightAnime.score);

    if (win) {
      setScore((score) => score + 1);
      setLeftAnime(rightAnime);
      setRightAnime(getRandomAnime());
    } else {
      setScore(0);
      setHasUserLost(true);
    }
  };

  return (
    <div className="grid h-screen w-screen grid-rows-2 bg-gray-800 md:grid-cols-2">
      <div className="h-full w-full md:h-screen">
        <LeftAnime
          title={leftAnime.title}
          score={leftAnime.score}
          image_url={leftAnime.image_url}
        />
      </div>

      <div className="h-full w-full md:h-screen">
        <RightAnime
          title={rightAnime.title}
          score={rightAnime.score}
          image_url={rightAnime.image_url}
          guessAnswer={guessAnswer}
        />
      </div>

      <HighScore score={highScore} />
      <CurrentScore score={score} />
    </div>
  );
};

export default Game;
