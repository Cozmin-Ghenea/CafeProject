import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import "./Menu.scss";
import { useEffect, useState } from "react";

export function Menu() {
  const [activeUserName, setActiveUserName] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function capitalizeFirstLetter(str: string) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const activeUser = users.find(
      (user: { isActive: boolean }) => user.isActive
    );
    if (activeUser) {
      setActiveUserName(capitalizeFirstLetter(activeUser.name));
    }
  }, []);

  const handleLogout = () => {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    users = users.map((user: any) => ({ ...user, isActive: false }));
    localStorage.setItem("users", JSON.stringify(users));
    setActiveUserName("");
  };

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

      {/*  hamburger button */}
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`tags ${isMenuOpen ? "active" : ""}`}>
        {!activeUserName ? (
          <Link to="/Login">Login</Link>
        ) : (
          <>
            <p>
              Welcome back <span>{activeUserName}</span>
            </p>
            <button className="ButtonForm" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/CreateYourPlan">Create Your Plan</Link>
      </div>
    </div>
  );
}
