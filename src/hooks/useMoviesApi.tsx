import axios from "axios";
import { Movie } from "../store/features/movies/types";
import { useCallback } from "react";

const useMoviesApi = () => {
  const getMovies = useCallback(async () => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;

    const { data: movies } = await axios.get<{ movies: Movie[] }>("/movies");
    return movies;
  }, []);

  return getMovies;
};

export default useMoviesApi;
