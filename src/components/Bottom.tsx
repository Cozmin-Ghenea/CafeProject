import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Bottom.scss";
export function Bottom() {
  return (
    <div className="bottom">
      <div className="Logo">
        <div className="combinedBeans">
          <img
            className="firstBean"
            src="/assets/home/desktop/icon-coffee-bean.svg"
            alt="firstBean"
          />
          <img
            className="secondBean "
            src="/assets/home/desktop/icon-coffee-bean.svg"
            alt="secondBean"
          />
        </div>
        <div className="logoText">coffeeroasters</div>
      </div>
      <div className="tags">
        <Link to="/">Home </Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/CreateYourPlan">Create Your plan</Link>
      </div>

      <div className="socials">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/cozmin-ghenea-974901179/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/cozminnn/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}
