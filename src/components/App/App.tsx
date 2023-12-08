import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import ListPage from "../../pages/ListPage/ListPage";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import "react-toastify/dist/ReactToastify.min.css";
import StyledToast from "../../styles/shared/ToastStyled";
import AddMoviePage from "../../pages/AddMoviePage/AddMoviePage";
import ContainerStyled from "../../styles/shared/ContainerStyled";
import DetailsPage from "../../pages/DetailsPage/DetailsPage";
import Background from "../Background/Background";

const App = (): React.ReactElement => {
  const { isLoading, hasBackground } = useAppSelector((state) => state.uiState);

  return (
    <>
      {isLoading && <Loading />}
      {hasBackground && <Background />}
      <StyledToast />
      <Header />
      <ContainerStyled>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<ListPage />} />
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="/add-movie" element={<AddMoviePage />} />
          <Route path="/movies/:movieId" element={<DetailsPage />} />
        </Routes>
      </ContainerStyled>
    </>
  );
};

export default App;
