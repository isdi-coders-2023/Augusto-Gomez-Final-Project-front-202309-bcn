import { useAppSelector } from "../../store/hooks";
import MovieListStyled from "./MovieListStyled";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
  const movies = useAppSelector((state) => state.moviesState.movies);

  return (
    <MovieListStyled className="movie-list">
      {movies.map((movie) => (
        <li key={movie._id} className="movie-list__item">
          <MovieCard movie={movie} />
        </li>
      ))}
    </MovieListStyled>
  );
};

export default MovieList;
