import { useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { useAppDispatch } from "../../store/hooks";
import ListPageStyled from "./ListPageStyled";
import { loadMoviesActionCreator } from "../../store/features/movies/moviesSlice";
import { moviesMock } from "../../mocks/moviesMocks";

const ListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadMoviesActionCreator(moviesMock));
  }, [dispatch]);

  return (
    <ListPageStyled className="list-page">
      <div className="list-page__title-container">
        <h1 className="list-page__title">Our movies</h1>
        <div className="list-page__divider"></div>
      </div>
      <MovieList />
    </ListPageStyled>
  );
};

export default ListPage;
