import React from "react";
import { useContext } from "react";
import { PostsContext } from "../components/PostsContext";
import Post from "./Post";

// Export PostsList component
export const PostsList = () => {
  // Extract the 'posts', 'favoritePosts', and 'setFavoritePosts' properties from the object returned by useContext(PostsContext)
  const { posts, favoritePosts, setFavoritePosts } = useContext(PostsContext);
  return (
    <div className="posts-container">
      {/* Map through posts array and render Post component */}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          text={post.text}
          author={post.author}
          date={post.date}
          likes={post.likes}
          isLiked={post.isLiked}
          favoritePosts={favoritePosts}
          setFavoritePosts={setFavoritePosts}
          imageURL={post.imageURL}
        ></Post>
      ))}
    </div>
  );
};
export default PostsList;
