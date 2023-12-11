import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import { modifyMovieActionCreator } from "../../store/features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import TitleStyled from "../../styles/shared/TitleStyled";
import useMoviesApi from "../../hooks/useMoviesApi";
import { MovieWithoutId } from "../../store/features/movies/types";
import ModifyMoviePageStyled from "./ModifyMoviePageStyled";

const ModifyMoviePage = () => {
  const { selectedMovie } = useAppSelector((state) => state.moviesState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { modifyMovieFromApi } = useMoviesApi();

  const formAction = async (movie: MovieWithoutId) => {
    const movieFromForm = await modifyMovieFromApi(movie, selectedMovie._id);

    if (movie) {
      dispatch(modifyMovieActionCreator(movieFromForm!));

      navigate("/home");
    }
  };

  return (
    <ModifyMoviePageStyled className="modify-movie-page">
      <TitleStyled className="modify-movie-page__title">
        Modify a movie
      </TitleStyled>
      <Form
        formFunction={formAction}
        selectedMovie={selectedMovie}
        buttonText="Modify"
      />
    </ModifyMoviePageStyled>
  );
};

export default ModifyMoviePage;
