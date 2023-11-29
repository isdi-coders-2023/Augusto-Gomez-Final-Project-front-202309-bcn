import { Movie } from "../../store/features/movies/types";
import Button from "../Button/Button";
import MovieCardStyled from "./MovieCardStyled";

interface MovieCardProp {
  movie: Movie;
}

const getYear = (releaseDate: string): string => releaseDate.slice(0, 4);

const getScoreStars = (score: string) => {
  if (+score > 0 && +score < 2) {
    return "⭐";
  } else if (+score > 2 && +score < 3) {
    return "⭐⭐";
  } else if (+score > 3 && +score < 4) {
    return "⭐⭐⭐";
  } else if (+score > 4 && +score < 5) {
    return "⭐⭐⭐⭐";
  } else if (+score === 5) {
    return "⭐⭐⭐⭐⭐";
  } else if (+score === 0 && +score < 1) {
    return "🤮";
  }
};

const MovieCard = ({
  movie: { genre, name, imageUrl, releaseDate, score },
}: MovieCardProp) => (
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
    <span className="movie-card__release-date">{getYear(releaseDate)}</span>
    <span className="movie-card__genre">{genre.join(" - ")}</span>
    <Button
      actionOnClick={() => {}}
      className="details"
      text="See details"
      type="button"
    />
  </MovieCardStyled>
);

export default MovieCard;
