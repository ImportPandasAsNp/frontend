import { BrowserRouter } from "react-browser-router";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App;
