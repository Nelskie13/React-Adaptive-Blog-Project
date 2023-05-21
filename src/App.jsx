import "../src/css/App.css";
import "./css/main.css";
import { useState } from "react";
import postsData from "./posts.json";
import PostsList from "./components/PostsList";
import NewPostForm from "./components/NewPostForm";
import MainPageLayout from "./Layouts/MainPageLayout";
import FavoriteList from "./components/FavoriteList";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [posts, setPosts] = useState(postsData);
  const [favoritePosts, setFavoritePosts] = useState([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route path="/" element={<MainPageLayout />}>
          <Route
            path="Allpost"
            element={
              <PostsList
                posts={postsData}
                favoritePosts={favoritePosts}
                setFavoritePosts={setFavoritePosts}
              />
            }
          />
          <Route
            path="/Favorite"
            element={
              <FavoriteList
                favoritePosts={favoritePosts}
                setFavoritePosts={setFavoritePosts}
              />
            }
          />
          <Route path="Addpost" element={<NewPostForm />} />
        </Route>
      </Route>
    )
  );
  // Render the RouterProvider component with the router configuration
  return <RouterProvider router={router} />;
}

export default App;
