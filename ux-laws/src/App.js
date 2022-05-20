import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPages";
import Menu from "./Components/Menu";

function App() {
  return (
    <div>
      <MainPage />
      <BrowserRouter>
        <Routes>
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
