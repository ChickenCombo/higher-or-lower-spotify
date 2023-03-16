import { HomeProps } from '@/utils/Types';

const Home = (props: HomeProps) => {
  const { handleStart } = props;

  return (
    <div className="flex h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="font-bold">Which anime has a higher score?</h1>
      <p>A simple game of higher or lower based on anime ratings.</p>
      <p>All data was based on AniList&apos;s user ratings in 2022.</p>
      <button
        className="mt-4 rounded-full bg-blue-400 px-10 py-3 text-white"
        onClick={handleStart}
      >
        Start
      </button>
    </div>
  );
};

export default Home;
