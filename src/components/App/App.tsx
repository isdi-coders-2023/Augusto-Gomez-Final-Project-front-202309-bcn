import { Navigate, Route, Routes } from "react-router-dom";
import Container from "../../styles/Container/Container";
import Header from "../Header/Header";
import ListPage from "../../pages/ListPage/ListPage";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import "react-toastify/dist/ReactToastify.min.css";
import StyledToast from "../../styles/Toast/ToastStyled";
import AddMoviePage from "../../pages/AddMoviePage/AddMoviePage";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <>
      {uiState.isLoading && <Loading />}
      <StyledToast />
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<ListPage />} />
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="/add-movie" element={<AddMoviePage />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
