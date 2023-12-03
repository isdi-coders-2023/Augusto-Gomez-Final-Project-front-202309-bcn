import { Movie } from "../../store/features/movies/types";
import MovieCardStyled from "./MovieCardStyled";
import getScoreStars from "../../utils/cardFunctions";
import Button from "../Button/Button";
import { useAppDispatch } from "../../store/hooks";
import { deleteMovieActionCreator } from "../../store/features/movies/moviesSlice";
import useMoviesApi from "../../hooks/useMoviesApi";

interface MovieCardProp {
  movie: Movie;
}

const MovieCard = ({
  movie: { genre, name, imageUrl, releaseDate, score, _id },
}: MovieCardProp) => {
  const dispatch = useAppDispatch();
  const { deleteMovieFromApi } = useMoviesApi();

  const deleteMovie = (id: string): void => {
    deleteMovieFromApi(import.meta.env.VITE_API_URL, id);
    dispatch(deleteMovieActionCreator(id));
  };

  return (
    <MovieCardStyled className="movie-card">
      <img
        src={imageUrl}
        alt={`Cover of ${name}`}
        className="movie-card__image"
        width="265"
        height="401"
      />
      <div className="movie-card__title-container">
        <h2 className="movie-card__title">{name}</h2>
        <span className="movie-card__score">{`${getScoreStars(
          score,
        )}${score}`}</span>
      </div>
      <span className="movie-card__release-date">
        {releaseDate.slice(0, 4)}
      </span>
      <span className="movie-card__genre">{genre.join(" - ")}</span>
      <Button
        text="Delete"
        type="button"
        actionOnClick={() => {
          deleteMovie(_id);
        }}
        modifier="delete"
      />
    </MovieCardStyled>
  );
};

export default MovieCard;
