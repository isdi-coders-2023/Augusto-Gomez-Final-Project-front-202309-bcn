import Form from "../../components/Form/Form";
import TitleStyled from "../../styles/shared/TitleStyled";
import AddMoviePageStyled from "./AddMoviePageStyled";

const AddMoviePage = (): React.ReactElement => (
  <AddMoviePageStyled className="add-movie-page">
    <TitleStyled className="add-movie-page__title">
      Add your own movie
    </TitleStyled>
    <Form />
  </AddMoviePageStyled>
);

export default AddMoviePage;
