import { Link } from "react-router";
import "./Menu.scss";
export function Menu() {
  return (
    <div className="Menu">
      <div className="Logo">
        <div className="combinedBeans">
          <img
            className="firstBean"
            src="/assets/home/desktop/icon-coffee-bean.svg"
            alt="firstBean"
          />
          <img
            className="secondBean"
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
    </div>
  );
}
