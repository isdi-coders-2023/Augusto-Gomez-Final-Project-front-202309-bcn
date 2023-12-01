import axios from "axios";
import { Movie } from "../store/features/movies/types";
import { useCallback } from "react";
import { MovieStructure } from "../store/features/movies/moviesSlice";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/UI/uiSlice";
import { useNavigate } from "react-router-dom";

export interface UseMoviesApiStructure {
  getMovies: (apiUrl: string) => Promise<MovieStructure | void>;
}

const useMoviesApi = (): UseMoviesApiStructure => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getMovies = useCallback(
    async (apiUrl: string): Promise<MovieStructure | undefined> => {
      dispatch(showLoadingActionCreator());

      try {
        const { data: movies } = await axios.get<{ movies: Movie[] }>(
          `${apiUrl}/movies`,
        );

        dispatch(hideLoadingActionCreator());

        return movies;
      } catch {
        navigate("/error-page");

        dispatch(hideLoadingActionCreator());
      }
    },
    [dispatch, navigate],
  );

  return { getMovies };
};

export default useMoviesApi;
