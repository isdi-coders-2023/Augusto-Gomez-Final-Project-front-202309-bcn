export interface Movie {
  _id: string;
  name: string;
  director: string;
  writer: string;
  stars: string;
  releaseDate: string;
  genre: string;
  description: string;
  imageUrl: string;
  score: string;
  isSeen: boolean;
}

export interface MovieList {
  movies: Movie[];
}

export type MovieWithoutId = Omit<Movie, "_id">;
