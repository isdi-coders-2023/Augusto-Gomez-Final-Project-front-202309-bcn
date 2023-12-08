import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import useMoviesApi from "../../hooks/useMoviesApi";
import { useParams } from "react-router-dom";
import { loadSelectedMovieActionCreator } from "../../store/features/movies/moviesSlice";
import { useEffect } from "react";

const DetailsPage = (): React.ReactElement => {
  const { loadSelectedMovie } = useMoviesApi();
  const dispatch = useAppDispatch();
  const { movieId } = useParams();

  const selectedMovie = useAppSelector(
    (state) => state.moviesState.selectedMovie,
  );

  useEffect(() => {
    (async () => {
      const movie = await loadSelectedMovie(movieId!);
      dispatch(loadSelectedMovieActionCreator(movie!));
    })();
  }, [dispatch, loadSelectedMovie, movieId]);

  return (
    <section className="details-page">
      <article className="movie-details-card">
        <img
          src={`${selectedMovie.imageUrl}`}
          alt={`Cover of ${selectedMovie.name}`}
          className="movie-details-card__image"
          width="209"
          height="283"
        />
        <div className="movie-details-card__title-container">
          <h2 className="title-container__title">{selectedMovie.name}</h2>
          <span className="title-container__score">{selectedMovie.score}</span>
        </div>
        <span className="movie-details-card__director">
          {selectedMovie.director}
        </span>
        <span className="movie-details-card__writer">
          {selectedMovie.writer}
        </span>
        <span className="movie-details-card__stars">{selectedMovie.stars}</span>
        <span className="movie-details-card__genre">{selectedMovie.genre}</span>
        <span className="movie-card-details__description">
          {selectedMovie.genre}
        </span>
        <span className="movie-details-card__release-date">
          {selectedMovie.releaseDate}
        </span>
        <div className="movie-details-card__button-container">
          <Button text="Delete" type="button" />
        </div>
      </article>
    </section>
  );
};

export default DetailsPage;
