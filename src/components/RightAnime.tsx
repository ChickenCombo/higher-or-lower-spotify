import { GuessAnime } from '@/Types';

const RightAnime = (props: GuessAnime) => {
  const { title, score, guessAnswer } = props;
  return (
    <>
      <h1 className="px-4 text-center text-3xl font-bold text-white drop-shadow-md">
        {title}
      </h1>
      {score}
      <input
        type="button"
        value="Higher"
        className="m-1 mt-4 cursor-pointer rounded-full bg-green-400 px-12 py-2 text-lg font-bold text-white hover:bg-green-500"
        onClick={() => guessAnswer(true)}
      />
      <input
        type="button"
        value="Lower"
        className="m-1 cursor-pointer rounded-full bg-red-400 px-12 py-2 text-lg font-bold text-white hover:bg-red-500"
        onClick={() => guessAnswer(false)}
      />
    </>
  );
};

export default RightAnime;
