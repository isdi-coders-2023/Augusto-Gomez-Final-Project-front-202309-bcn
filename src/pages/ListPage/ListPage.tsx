import { useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { useAppDispatch } from "../../store/hooks";
import ListPageStyled from "./ListPageStyled";
import { loadMoviesActionCreator } from "../../store/features/movies/moviesSlice";
import useMoviesApi from "../../hooks/useMoviesApi";

const ListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getMovies } = useMoviesApi();

  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      dispatch(loadMoviesActionCreator(movies.movies));
    })();
  }, [dispatch, getMovies]);

  return (
    <ListPageStyled className="list-page">
      <h1 className="list-page__title">Our movies</h1>
      <MovieList />
    </ListPageStyled>
  );
};

export default ListPage;
