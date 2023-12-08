import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import useMoviesApi from "../../hooks/useMoviesApi";
import { useParams } from "react-router-dom";
import { loadSelectedMovieActionCreator } from "../../store/features/movies/moviesSlice";
import { useEffect } from "react";
import DetailsPageStyled from "./DetailsPageStyled";

const DetailsPage = (): React.ReactElement => {
  const { loadSelectedMovie } = useMoviesApi();
  const dispatch = useAppDispatch();
  const { movieId } = useParams();

  const {
    selectedMovie: {
      description,
      director,
      genre,
      imageUrl,
      name,
      releaseDate,
      score,
      stars,
      writer,
    },
  } = useAppSelector((state) => state.moviesState);

  useEffect(() => {
    (async () => {
      const movie = await loadSelectedMovie(movieId!);
      dispatch(loadSelectedMovieActionCreator(movie!));
    })();
  }, [dispatch, loadSelectedMovie, movieId]);

  return (
    <DetailsPageStyled>
      <div className="card-background">
        <article className="movie-details-card">
          <img
            src={`${imageUrl}`}
            alt={`Cover of ${name}`}
            className="movie-details-card__image"
            width="209"
            height="283"
          />
          <div className="movie-details-card__title-container">
            <h2 className="title-container__title">{name}</h2>
            <span className="title-container__score">{score}⭐</span>
          </div>
          <div className="movie-details-card__text-container">
            <div className="movie-details-card__field">
              <span className="movie-details-card__descriptor">Director:</span>
              <span className="movie-details-card__director">{director}</span>
            </div>
            <div className="movie-details-card__field">
              <span className="movie-details-card__descriptor">Writer:</span>
              <span className="movie-details-card__writer">{writer}</span>
            </div>
            <div className="movie-details-card__field">
              <span className="movie-details-card__descriptor">Stars:</span>
              <span className="movie-details-card__stars">{stars}</span>
            </div>
            <div className="movie-details-card__field">
              <span className="movie-details-card__descriptor">Genre</span>
              <span className="movie-details-card__genre">{genre}</span>
            </div>
            <span className="movie-details-card__description">
              {description}
            </span>
            <div className="movie-details-card__field release-date-field">
              <span className="movie-details-card__descriptor">
                Release date
              </span>
              <span className="movie-details-card__release-date">
                {releaseDate}
              </span>
            </div>
          </div>
          <div className="movie-details-card__button-container">
            <Button text="Delete" type="button" />
          </div>
        </article>
      </div>
    </DetailsPageStyled>
  );
};

export default DetailsPage;
