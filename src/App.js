import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubsState from "./contexts/subsState";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <SubsState>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/profiles" element={<Profiles />}></Route>
          </Routes>
        </BrowserRouter>
      </SubsState>
    </>
  );
}

export default App;
