// Import images
import React, { useContext } from "react";
import commentLogo from "../assets/comment.svg";
import heartLogo from "../assets/heart.svg";
import heartSolid from "../assets/heartSolid.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Images from "./Images";
import { PostsContext } from "../components/PostsContext";

const Post = ({
  id,
  title,
  text,
  date,
  author,
  likes,
  favoritePosts,
  setFavoritePosts,
}) => {
  const { posts } = useContext(PostsContext);
  const [isLike, setIsLiked] = useState("");
  const [postLikes, setPostLikes] = useState(likes);
  const selectedPost = posts.find((post) => post.id === parseInt(id));

  // Function to handle favoriting/unfavoriting a post
  const favoriteHandler = () => {
    console.log("Favorite selected!");
    // If the post is already favorited, remove it from the favoritePosts array
    if (favoritePosts.includes(id)) {
      setFavoritePosts(
        favoritePosts.filter((postId) => postId !== id && postId)
      );
    } else {
      // If the post is not favorited, add it to the favoritePosts array
      setFavoritePosts([...favoritePosts, id]);
    }
  };

  // Function to handle toggling the like state of a post
  const handleLike = () => {
    setPostLikes((prevLikes) => (isLike ? prevLikes - 1 : prevLikes + 1));
    setIsLiked(!isLike);
  };

  // Function to handle both like and favorite actions
  const toggleLike = () => {
    handleLike();
    favoriteHandler();
  };
  return (
    <div className="cards-container">
      <div className="Cards-details">
        <Images id={id} />
        <div className="Text-Props">
          <p className="Cards-title">{title}</p>
          <p className="Cards-text">{text}</p>
          <div className="likes-author-container">
            <p className="Cards-date">{date} </p>
            <p className="Cards-dot"> • </p>
            <p className="Cards-author"> {author}</p>
            <NavLink to={`/Allpost/${id}`} key={id}>
              <div className="comment">
                <button className="commentBtn">
                  <img src={commentLogo} alt="comment-logo" />
                </button>
              </div>
            </NavLink>
            <p className="Cards-comment">{selectedPost.comments.length}</p>
            <div className="heart">
              <button className="heartBtn" onClick={toggleLike}>
                {isLike ? (
                  <img
                    className="heartSolid"
                    src={heartSolid}
                    alt="heart-logo-solid"
                  />
                ) : (
                  <>
                    <img
                      className="heartLogo"
                      src={heartLogo}
                      alt="heart-logo"
                    />
                  </>
                )}
              </button>
            </div>
            <p className="Cards-likes">{postLikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
