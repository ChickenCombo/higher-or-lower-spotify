import { LostProps } from '@/utils/Types';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Lost = (props: LostProps) => {
  const { setHasUserLost, setHasGameStarted, score, setScore } = props;

  const resetGame = () => {
    setScore(0);
    setHasUserLost(false);
    setHasGameStarted(true);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-800 p-8 text-center text-white">
      <h1 className="text-3xl font-bold">You lost!</h1>
      <h1 className="text-3xl font-bold">(╥﹏╥)</h1>
      <h1 className="mt-8 text-2xl font-bold">Your final score was {score}</h1>
      <button
        type="button"
        className="m-8 w-full max-w-[10rem] transform cursor-pointer rounded-full bg-blue-500 py-2 text-lg font-bold transition duration-200 hover:scale-105 hover:bg-blue-600"
        onClick={resetGame}
      >
        <div className="flex items-center justify-center">
          Home &nbsp; <AiOutlineArrowRight />
        </div>
      </button>
    </div>
  );
};

export default Lost;
