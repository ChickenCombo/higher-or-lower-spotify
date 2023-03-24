export interface GameContextType {
  hasGameStarted: boolean;
  setHasGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  hasUserLost: boolean;
  setHasUserLost: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

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
