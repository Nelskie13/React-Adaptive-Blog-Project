import { useEffect, useMemo, useState } from "react";
import postsData from "../posts.json";
import { Post } from "./PostsList";

function FavoriteList({ favoritePosts, setFavoritePosts }) {
  // Filter the postsData based on the favoritePosts array
  let favoritePost = postsData.filter((post) => {
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
      setFavoritePosts(JSON.parse(storedFavoritePosts));
    }
  }, []);

  useMemo(() => {
    // Update the posting state whenever the favoritePosts array changes
    favoritePost = postsData.filter((post) => {
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
            author={post.author}
            date={post.date}
            comment={post.comment}
            likes={post.likes}
            isLiked={post.isLiked}
            favoritePosts={post.favoritePosts}
          />
        ))
      ) : (
        <h1 className="NoFavorite">No Favorite posts</h1>
      )}
    </div>
  );
}

export default FavoriteList;
