import logo from "../assets/LOGO.svg";
import hamburger from "../assets/MenuBurger.svg";
import { NavLink, Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="navbar-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <img className="hamburger" src={hamburger} alt="menu-burger" />
        <div className="menu-container">
          <div className="Menu">
            <NavLink to="/" className="title-menu-blog">
              Blog
            </NavLink>
            <p className="title-menu">About us</p>
            <p className="title-menu">Reviews</p>
          </div>
          <div className="SignLog">
            <p className="signlog">Sign up</p>
            <p className="signlog">Log in</p>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Header;
