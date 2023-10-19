import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubsState from "./contexts/subsState";
import History from "./pages/History";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Profiles from "./pages/Profiles";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <SubsState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/profile" element={<Profiles />}></Route>
            <Route path="/history" element={<History />}></Route>
          </Routes>
        </BrowserRouter>
      </SubsState>
    </>
  );
}

export default App;
