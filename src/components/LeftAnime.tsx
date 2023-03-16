import { Anime } from '@/utils/Types';

const LeftAnime = (props: Anime) => {
  const { title, score, image_url } = props;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <img
        src={image_url}
        className="h-[30vw] w-[37vw] rounded-xl object-cover md:h-[25vw] md:w-[32vw]"
      />
      <h1 className="mt-4 px-4 text-center text-3xl font-bold text-white drop-shadow-md">
        &quot;{title}&quot;
      </h1>
      <p className="text-center text-sm text-white drop-shadow-md">has</p>
      <h1 className="text-center text-3xl font-bold text-green-400 drop-shadow-md">
        {score}
      </h1>
      <p className="text-center text-sm text-white drop-shadow-md">
        average monthly listeners
      </p>
    </div>
  );
};

export default LeftAnime;
