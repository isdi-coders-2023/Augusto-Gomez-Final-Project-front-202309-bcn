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

const App = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.uiState.isLoading);

  return (
    <>
      {isLoading && <Loading />}
      <StyledToast />
      <Header />
      <ContainerStyled>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<ListPage />} />
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="/add-movie" element={<AddMoviePage />} />
        </Routes>
      </ContainerStyled>
    </>
  );
};

export default App;
