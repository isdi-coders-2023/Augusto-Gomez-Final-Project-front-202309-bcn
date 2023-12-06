import axios from "axios";
import { Movie, MovieWithoutId } from "../store/features/movies/types";
import { useCallback } from "react";
import { MovieStructure } from "../store/features/movies/moviesSlice";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/UI/uiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setStyle } from "../utils/toastifyFunctions";

export interface UseMoviesApiStructure {
  getMovies: () => Promise<MovieStructure | void>;
  deleteMovieFromApi: (id: string) => Promise<Record<string, never> | void>;
  addMovie: (movie: MovieWithoutId) => Promise<Movie>;
}

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useMoviesApi = (): UseMoviesApiStructure => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const getMovies = useCallback(async (): Promise<
    MovieStructure | undefined
  > => {
    dispatch(showLoadingActionCreator());

    try {
      const { data: movies } = await axios.get<{ movies: Movie[] }>(`/movies`);

      dispatch(hideLoadingActionCreator());

      return movies;
    } catch {
      navigate("/error-page");

      dispatch(hideLoadingActionCreator());
    }
  }, [dispatch, navigate]);

  const deleteMovieFromApi = useCallback(
    async (id: string): Promise<Record<string, never> | void> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.delete<Record<string, never>>(
          `movies/${id}`,
        );

        toast.success(
          "Success! You have deleted a movie",
          setStyle("#55b938", "#ccEAc4"),
        );

        dispatch(hideLoadingActionCreator());

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error(
          "Error! Failed to delete a movie",
          setStyle("#d65745", "#F3CDC8"),
        );
      }
    },

    [dispatch],
  );

  const addMovie = useCallback(
    async (movie: MovieWithoutId): Promise<Movie> => {
      dispatch(showLoadingActionCreator());

      const { data } = await axios.post<{ movie: Movie }>(
        "/movies/create",
        movie,
      );

      dispatch(hideLoadingActionCreator());

      return data.movie;
    },
    [dispatch],
  );

  return { getMovies, deleteMovieFromApi, addMovie };
};

export default useMoviesApi;
