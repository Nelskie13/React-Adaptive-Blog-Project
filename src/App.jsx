import React from "react";
import "../src/css/App.css";
import "./css/main.css";
import { useState } from "react";
import postsData from "./posts.json";
import PostsList from "./components/PostsList";
import NewPostForm from "./components/NewPostForm";
import MainPageLayout from "./Layouts/MainPageLayout";
import FavoriteList from "./components/FavoriteList";
import { PostsContext } from "./components/PostsContext";
import PostLayout from "./Layouts/PostLayout";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./components/Header";
import PostDetails from "./components/PostDetails";

function App() {
  // Initialize the posts and favoritePosts state using useState
  const [posts, setPosts] = useState(postsData);
  const [favoritePosts, setFavoritePosts] = useState([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route path="/" element={<MainPageLayout />}>
          <Route path="Allpost" element={<PostsList />} />

          <Route path="Allpost" element={<PostLayout />}>
            <Route path="/Allpost/:id" element={<PostDetails />} />
          </Route>

          <Route path="Favorite" element={<FavoriteList />} />
          <Route path="Addpost" element={<NewPostForm />} />
        </Route>
      </Route>
    )
  );

  // Render the RouterProvider component with the router configuration
  // Wrap the RouterProvider component with the PostsContext.Provider to provide access to the posts and favoritePosts state
  return (
    <PostsContext.Provider
      value={{ posts, setPosts, favoritePosts, setFavoritePosts }}
    >
      <RouterProvider router={router} />
    </PostsContext.Provider>
  );
}

export default App;
