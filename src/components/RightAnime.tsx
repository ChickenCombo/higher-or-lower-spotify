import { GuessAnime } from '@/utils/Types';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

const RightAnime = (props: GuessAnime) => {
  const { title, image_url, guessAnswer } = props;

  return (
    <div className="flex h-full w-full flex-col items-center md:justify-center">
      <img
        src={image_url}
        className="h-[30vw] w-[37vw] transform rounded-xl object-cover transition duration-200 hover:scale-105 md:h-[25vw] md:w-[32vw]"
      />
      <h1 className="mt-4 px-4 text-center text-3xl font-bold text-white drop-shadow-md">
        &quot;{title}&quot;
      </h1>

      <button
        type="button"
        className="m-1 mt-4 w-full max-w-[10rem] transform cursor-pointer rounded-full bg-[#59ac51] py-2 text-lg font-bold text-white transition duration-200 hover:scale-105 hover:bg-[#3e7938]"
        onClick={() => guessAnswer(true)}
      >
        <div className="flex items-center justify-center">
          Higher &nbsp; <AiOutlineArrowUp />
        </div>
      </button>

      <button
        type="button"
        className="m-1 w-full max-w-[10rem] transform cursor-pointer rounded-full bg-[#c75555] py-2 text-lg font-bold text-white transition duration-200 hover:scale-105 hover:bg-[#933f3f]"
        onClick={() => guessAnswer(false)}
      >
        <div className="flex items-center justify-center">
          Lower &nbsp; <AiOutlineArrowDown />
        </div>
      </button>
      <p className="mt-2 text-center text-sm text-white drop-shadow-md">
        monthly listeners
      </p>
    </div>
  );
};

export default RightAnime;
