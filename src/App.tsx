import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/about/About";
import { Plan } from "./Pages/plan/Plan";
import NotFoundPage from "./Component/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Plan" element={<Plan />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
