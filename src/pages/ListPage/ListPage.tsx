import MovieList from "../../components/MovieList/MovieList";
import ListPageStyled from "./ListPageStyled";

const ListPage = (): React.ReactElement => {
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
