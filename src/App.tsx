import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Plan } from "./Pages/Plan/Plan";
import NotFoundPage from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/CreateYourPlan" element={<Plan />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
