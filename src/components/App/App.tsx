import { Navigate, Route, Routes } from "react-router-dom";
import Container from "../../styles/Container/Container";
import Header from "../Header/Header";
import ListPage from "../../pages/ListPage/ListPage";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <>
      {uiState.isLoading && <Loading />}
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<ListPage />} />
          <Route path="/error-page" element={<ErrorPage />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
