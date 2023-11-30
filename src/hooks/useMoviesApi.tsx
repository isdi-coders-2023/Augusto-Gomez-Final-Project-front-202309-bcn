import axios from "axios";
import { Movie } from "../store/features/movies/types";
import { useCallback } from "react";
import { MovieStructure } from "../store/features/movies/moviesSlice";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/UI/uiSlice";

interface UseMoviesApiStructure {
  getMovies: () => Promise<MovieStructure>;
}

const useMoviesApi = (): UseMoviesApiStructure => {
  const dispatch = useAppDispatch();

  const getMovies = useCallback(async (): Promise<MovieStructure> => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;

    dispatch(showLoadingActionCreator());

    const { data: movies } = await axios.get<{ movies: Movie[] }>("/movies");

    dispatch(hideLoadingActionCreator());

    return movies;
  }, [dispatch]);

  return { getMovies };
};

export default useMoviesApi;
