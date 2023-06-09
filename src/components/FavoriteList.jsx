import React from "react";
import { useContext, useEffect, useMemo, useState } from "react";
import Post from "./Post";
import { PostsContext } from "./PostsContext";

function FavoriteList() {
  // Access the 'posts', 'favoritePosts', and 'setFavoritePosts' from the context using the useContext hook
  const { posts, favoritePosts, setFavoritePosts } = useContext(PostsContext);
  // Filter the postsData based on the favoritePosts array
  let favoritePost = posts.filter((post) => {
    return favoritePosts.includes(post.id);
  });

  // If there are favorite posts, store them in local storage
  if (favoritePosts.length > 0) {
    localStorage.setItem("favoritePosts", JSON.stringify(favoritePosts));
  }

  // Set the initial state of the posting variable to the favoritePost array
  const [posting, setPosting] = useState(favoritePost);

  useEffect(() => {
    // Retrieve favorite posts from local storage when the component mounts
    const storedFavoritePosts = localStorage.getItem("favoritePosts");
    if (storedFavoritePosts) {
      // Set the 'favoritePosts' state by parsing the stored data from local storage
      setFavoritePosts(JSON.parse(storedFavoritePosts));
    }
  }, []);

  useMemo(() => {
    // Update the posting state whenever the favoritePosts array changes
    favoritePost = posts.filter((post) => {
      return favoritePosts.includes(post.id);
    });
    setPosting(favoritePost);
  }, [favoritePosts]);

  return (
    <div className="posts-container">
      {posting.length > 0 ? (
        posting.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            text={post.text}
            date={post.date}
            author={post.author}
            likes={post.likes}
            imageURL={post.imageURL}
          />
        ))
      ) : (
        <h1 className="NoFavorite">No Favorite posts</h1>
      )}
    </div>
  );
}

export default FavoriteList;
