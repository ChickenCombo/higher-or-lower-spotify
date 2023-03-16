import { GuessAnime } from '@/utils/Types';

const RightAnime = (props: GuessAnime) => {
  const { title, image_url, guessAnswer } = props;

  return (
    <div className="flex h-full w-full flex-col items-center md:justify-center">
      <img
        src={image_url}
        className="h-[30vw] w-[37vw] rounded-xl object-cover md:h-[25vw] md:w-[32vw]"
      />
      <h1 className="mt-4 px-4 text-center text-3xl font-bold text-white drop-shadow-md">
        &quot;{title}&quot;
      </h1>
      <input
        type="button"
        value="Higher"
        className="m-1 mt-4 cursor-pointer rounded-full bg-[#59ac51] px-12 py-2 text-lg font-bold text-white hover:bg-[#3e7938]"
        onClick={() => guessAnswer(true)}
      />
      <input
        type="button"
        value="Lower"
        className="m-1 cursor-pointer rounded-full bg-[#c75555] px-12 py-2 text-lg font-bold text-white hover:bg-[#933f3f]"
        onClick={() => guessAnswer(false)}
      />
      <p className="mt-2 text-center text-sm text-white drop-shadow-md">
        average monthly listeners
      </p>
    </div>
  );
};

export default RightAnime;
