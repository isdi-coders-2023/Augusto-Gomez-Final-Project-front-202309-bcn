import { Movie } from "../../store/features/movies/types";
import MovieCardStyled from "./MovieCardStyled";
import getScoreStars from "../../utils/cardFunctions";
import Button from "../Button/Button";
import { useAppDispatch } from "../../store/hooks";
import { deleteMovieActionCreator } from "../../store/features/movies/moviesSlice";
import useMoviesApi from "../../hooks/useMoviesApi";
import { useNavigate } from "react-router-dom";

interface MovieCardProp {
  movie: Movie;
}

const MovieCard = ({
  movie: { genre, name, imageUrl, releaseDate, score, _id },
}: MovieCardProp) => {
  const dispatch = useAppDispatch();
  const { deleteMovieFromApi } = useMoviesApi();
  const navigate = useNavigate();

  const deleteMovie = async (): Promise<void> => {
    await deleteMovieFromApi(_id);

    dispatch(deleteMovieActionCreator(_id));
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
      <span className="movie-card__genre">{genre}</span>
      <Button
        text="Delete"
        type="button"
        actionOnClick={deleteMovie}
        modifier="button--delete"
      />
      <Button
        text="Details"
        type="button"
        actionOnClick={() => navigate(`/movies/${_id}`)}
        modifier="button--details"
      />
    </MovieCardStyled>
  );
};

export default MovieCard;
