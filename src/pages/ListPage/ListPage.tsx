import { moviesMock } from "../../mocks/movieMocks";
import { loadMoviesActionCreator } from "../../store/features/movies/moviesSlice";
import { useAppDispatch } from "../../store/hooks";
import ListPageStyled from "./ListPageStyled";

const ListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  dispatch(loadMoviesActionCreator(moviesMock));

  return (
    <ListPageStyled className="list-page">
      <div className="list-page__title-container">
        <h1 className="list-page__title">Our movies</h1>
        <div className="list-page__divider"></div>
      </div>
    </ListPageStyled>
  );
};

export default ListPage;
