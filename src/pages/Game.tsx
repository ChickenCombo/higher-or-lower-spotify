import { getAnimeList } from '@/Anime';
import { Anime, Score } from '@/Types';
import CurrentScore from '@/components/CurrentScore';
import HighScore from '@/components/HighScore';
import LeftAnime from '@/components/LeftAnime';
import RightAnime from '@/components/RightAnime';
import { useState } from 'react';

const Game = () => {
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

  const [leftAnime, setLeftAnime] = useState<Anime>(getRandomAnime());
  const [rightAnime, setRightAnime] = useState<Anime>(getRandomAnime());
  const [score, setScore] = useState<number>(0);

  const answer = parseInt(leftAnime.score) < parseInt(rightAnime.score);

  const guessAnswer = (guess: boolean) => {
    if (answer === guess) {
      setScore((score) => score + 1);
      setLeftAnime(rightAnime);
      setRightAnime(getRandomAnime());
    } else {
      setScore(0);
    }
  };

  return (
    <div className="grid h-screen w-screen grid-rows-2 md:grid-cols-2">
      <div className="flex h-full w-full flex-col items-center justify-center bg-yellow-300 md:h-screen">
        <LeftAnime
          title={leftAnime.title}
          score={leftAnime.score}
          image_url={leftAnime.image_url}
        />
      </div>

      <div className="flex h-full w-full flex-col items-center justify-center bg-blue-300 md:h-screen">
        <RightAnime
          title={rightAnime.title}
          score={rightAnime.score}
          image_url={rightAnime.image_url}
          guessAnswer={guessAnswer}
        />
      </div>

      <HighScore score={0} />
      <CurrentScore score={score} />
    </div>
  );
};

export default Game;
