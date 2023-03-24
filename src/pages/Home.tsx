import { BsSpotify } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { GameContext } from '@/App';
import { useContext } from 'react';

const Home = () => {
  const { setHasGameStarted } = useContext(GameContext);

  const handleStart = () => {
    setHasGameStarted((value: boolean) => !value);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-800 p-8 text-center text-white">
      <BsSpotify className="m-8 scale-100 transform text-9xl text-[#1fdf64] transition duration-200 hover:scale-105" />
      <h1 className="text-3xl font-bold">
        Which artist has a higher monthly listener on Spotify?
      </h1>
      <p className="text-xl">
        A simple game of higher or lower based on Spotify&apos;s monthly
        listeners
      </p>
      <p className="text-xl">
        All data was taken on Spotify&apos;s monthly listeners in March of 2023.
      </p>
      <button
        type="button"
        className="m-5 w-full max-w-[10rem] transform cursor-pointer rounded-full bg-blue-500 py-2 text-lg font-bold transition duration-200 hover:scale-105 hover:bg-blue-600"
        onClick={handleStart}
      >
        <div className="flex items-center justify-center">
          Start &nbsp; <AiOutlineArrowRight />
        </div>
      </button>
    </div>
  );
};

export default Home;
