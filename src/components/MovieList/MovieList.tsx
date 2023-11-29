import { useAppSelector } from "../../store/hooks";
import MovieListStyled from "./MovieListStyled";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
  const moviesState = useAppSelector((state) => state.moviesState);

  return (
    <MovieListStyled className="movie-list">
      {moviesState.movies.map((movie) => (
        <li key={movie._id} className="movie-list__item">
          <MovieCard movie={movie} />
        </li>
      ))}
    </MovieListStyled>
  );
};

export default MovieList;
