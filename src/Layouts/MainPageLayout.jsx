import { NavLink, Outlet } from "react-router-dom";
import Add from "../assets/Add.svg";

function MainPageLayout() {
  return (
    <div>
      <nav className="MainPageSelection">
        <div className="All-Fav">
          <NavLink to="Allpost" className="allpost">
            All posts
          </NavLink>
          <NavLink to="Favorite" className="favorite">
            Favorites
          </NavLink>
        </div>
        <div className="Add">
          <NavLink to="Addpost" className="addpost">
            + Add post
          </NavLink>
          <NavLink to="Addpost" className="Add-logo">
            <div>
              <img className="adds-logo" src={Add} alt="Add-logo" />
            </div>
          </NavLink>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainPageLayout;
