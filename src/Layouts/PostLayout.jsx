import React from "react";
import { Outlet } from "react-router-dom";

const PostLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PostLayout;
