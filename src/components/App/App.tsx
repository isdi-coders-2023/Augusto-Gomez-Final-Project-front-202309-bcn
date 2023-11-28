import { Navigate, Route, Routes } from "react-router-dom";
import Container from "../../styles/Container/Container";
import Header from "../Header/Header";
import ListPage from "../../pages/ListPage/ListPage";

const App = () => (
  <>
    <Header />
    <main className="main-content">
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<ListPage />} />
        </Routes>
      </Container>
    </main>
  </>
);

export default App;
