import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPages";
import AestheticPage from "./Pages/AestheticPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/article/1" element={<AestheticPage />} />
          {/* <Route path="/article/2" element={<MainPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
