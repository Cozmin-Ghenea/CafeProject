import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.scss";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Plan } from "./Pages/plan/Plan";
import NotFoundPage from "./components/NotFound";
import { Login } from "./components/Login&Register/Login";
import { Register } from "./components/Login&Register/Register";
import ScrollToTop from "./components/ScrollToTop.tsx";

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/CreateYourPlan" element={<Plan />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
