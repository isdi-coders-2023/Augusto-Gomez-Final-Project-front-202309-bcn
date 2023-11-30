import { Movie } from "../../store/features/movies/types";
import MovieCardStyled from "./MovieCardStyled";

interface MovieCardProp {
  movie: Movie;
}

const MovieCard = ({
  movie: { genre, name, imageUrl, releaseDate, score },
}: MovieCardProp) => {
  const getScoreStars = (score: string) => {
    const roundedScore = Math.floor(+score);

    let stars = "";

    switch (roundedScore) {
      case 0:
        stars = "🤮";
        break;
      case 1:
        stars = "⭐";
        break;
      case 2:
        stars = "⭐⭐";
        break;
      case 3:
        stars = "⭐⭐⭐";
        break;
      case 4:
        stars = "⭐⭐⭐⭐";
        break;
      case 5:
        stars = "⭐⭐⭐⭐⭐";
        break;
    }

    return stars;
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
    </MovieCardStyled>
  );
};

export default MovieCard;
