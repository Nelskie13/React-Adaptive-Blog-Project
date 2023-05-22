import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../assets/arrow.svg";

function BlogReturn() {
  return (
    <div className="BlogReturn">
      <NavLink to="/Allpost" className="blogReturn">
        <div BlogReturn-container>
          <img src={arrow} />
          <p className="blogReturnText">Blog</p>
        </div>
      </NavLink>
    </div>
  );
}

export default BlogReturn;
