import axios from "axios";
import { Movie } from "../store/features/movies/types";
import { useCallback } from "react";
import { MovieStructure } from "../store/features/movies/moviesSlice";

interface UseMoviesApiStructure {
  getMovies: () => Promise<MovieStructure>;
}

const useMoviesApi = (): UseMoviesApiStructure => {
  const getMovies = useCallback(async (): Promise<MovieStructure> => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;

    const { data: movies } = await axios.get<{ movies: Movie[] }>("/movies");

    return movies;
  }, []);

  return { getMovies };
};

export default useMoviesApi;
