export interface Anime {
  title: string;
  score: string;
  image_url: string;
}

export interface GuessAnime {
  title: string;
  score: string;
  image_url: string;
  guessAnswer: (guess: boolean) => void;
}

export interface Score {
  score: number;
}
