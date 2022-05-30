import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPages";
import AestheticPage from "./Pages/AestheticPage";
import DohertyPage from "./Pages/DohertyPage";
import FittsLaw from "./Pages/FittsLaw";
import HicksLaw from "./Pages/HicksLaw";
import JakobsLaw from "./Pages/JakobsLaw";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/article/1" element={<AestheticPage />} />

          <Route path="/article/2" element={<DohertyPage />} />
          <Route path="/article/3" element={<FittsLaw />} />
          <Route path="/article/4" element={<HicksLaw/>} />
         <Route path ="/article/5" element={<JakobsLaw/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
