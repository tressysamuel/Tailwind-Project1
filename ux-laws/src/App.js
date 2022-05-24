import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPages";
import AestheticPage from "./Pages/AestheticPage";
import DohertyPage from "./Pages/DohertyPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/article/1" element={<AestheticPage />} />

          <Route path="/article/2" element={<DohertyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
