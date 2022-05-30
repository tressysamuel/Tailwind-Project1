import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPages";
import AestheticPage from "./Pages/AestheticPage";
import DohertyPage from "./Pages/DohertyPage";
import FittsLaw from "./Pages/FittsLaw";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/article/1" element={<AestheticPage />} />

          <Route path="/article/2" element={<DohertyPage />} />
          <Route path="/article/3" element={<FittsLaw />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
