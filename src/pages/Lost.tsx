import { LostProps } from '@/utils/Types';

const Lost = (props: LostProps) => {
  const { setHasUserLost, setHasGameStarted } = props;

  const resetGame = () => {
    setHasUserLost(false);
    setHasGameStarted(true);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-500 p-8 text-center">
      <h1 className="font-bold">You lost</h1>
      <input
        type="button"
        value="Home"
        className="m-1 cursor-pointer rounded-full bg-red-400 px-12 py-2 text-lg font-bold text-white hover:bg-red-500"
        onClick={resetGame}
      />
    </div>
  );
};

export default Lost;
