import { Anime } from '@/Types';

const LeftAnime = (props: Anime) => {
  const { title, score } = props;
  return (
    <>
      <h1 className="px-4 text-center text-3xl font-bold text-white drop-shadow-md">
        {title}
      </h1>
      <p className="text-center text-lg font-bold text-white drop-shadow-md">
        has
      </p>
      <h1 className="text-center text-3xl font-bold text-white drop-shadow-md">
        {score}%
      </h1>
      <p className="text-center text-lg font-bold text-white drop-shadow-md">
        rating
      </p>
    </>
  );
};

export default LeftAnime;
