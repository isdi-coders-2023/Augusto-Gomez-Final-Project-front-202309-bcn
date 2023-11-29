import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadMoviesActionCreator } from "../../store/features/movies/moviesSlice";
import { moviesMock } from "../../mocks/movieMocks";

const MovieList = () => {
  const moviesState = useAppSelector((state) => state.movieState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadMoviesActionCreator(moviesMock));
  }, [dispatch]);

  return (
    <ul className="movie-list">
      {moviesState.movies.map((movie) => (
        <h2 className="movie-list__item">{movie.name}</h2>
      ))}
    </ul>
  );
};

export default MovieList;
