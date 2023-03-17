// Types
export interface Artist {
  title: string;
  score: string;
  image_url: string;
}

export interface GuessArtist {
  title: string;
  score: string;
  image_url: string;
  guessAnswer: (guess: boolean) => void;
}

export interface Score {
  score: number;
}

// Props
export interface LostProps {
  setHasGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setHasUserLost: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HomeProps {
  handleStart: () => void;
}

export interface GameProps {
  setHasUserLost: React.Dispatch<React.SetStateAction<boolean>>;
}
