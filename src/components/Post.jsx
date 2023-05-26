// Import images
import React, { useContext } from "react";
import commentLogo from "../assets/comment.svg";
import commentOutline from "../assets/commentOutline.svg";
import heartLogo from "../assets/heart.svg";
import heartSolid from "../assets/heartSolid.svg";
import heartOutline from "../assets/heartOutline.svg";
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
  imageURL,
}) => {
  const { posts } = useContext(PostsContext);
  const [isLike, setIsLiked] = useState("");
  const [postLikes, setPostLikes] = useState(likes);
  const selectedPost = posts.find((post) => post.id === parseInt(id));
  const [hoverComment, setHoverComment] = useState(false);
  const [hoverHeart, setHoverHeart] = useState(false);

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
    setPostLikes(postLikes + 1);
    setIsLiked(!isLike);
  };

  // Function to handle both like and favorite actions
  const toggleLike = () => {
    handleLike();
    favoriteHandler();
  };

  const mouseOverCommentHandler = () => {
    setHoverComment(true);
  };

  const mouseOutCommentHandler = () => {
    setHoverComment(false);
  };

  const mouseOverHeartHandler = () => {
    setHoverHeart(true);
  };

  const mouseOutHeartHandler = () => {
    setHoverHeart(false);
  };

  return (
    <div className="cards-container">
      <div className="Cards-details">
        <Images id={id} imageURL={imageURL} />
        <div className="Text-Props">
          <NavLink className="title-post-props" to={`/Allpost/${id}`} key={id}>
            <p className="Cards-title">{title}</p>
          </NavLink>
          <p className="Cards-text">{text}</p>
          <div className="likes-author-container">
            <p className="Cards-date">{date} </p>
            <p className="Cards-dot"> • </p>
            <p className="Cards-author"> {author}</p>
            <NavLink to={`/Allpost/${id}`} key={id}>
              <div
                className="comment"
                onMouseOver={mouseOverCommentHandler}
                onMouseOut={mouseOutCommentHandler}
              >
                <button className="commentBtn">
                  {hoverComment ? (
                    <img
                      className="commentBtnLogo"
                      src={commentOutline}
                      alt="comment-logo"
                    />
                  ) : (
                    <img
                      className="commentBtnLogo"
                      src={commentLogo}
                      alt="comment-logo"
                    />
                  )}
                </button>
              </div>
            </NavLink>
            <p className="Cards-comment">{selectedPost.comments.length}</p>
            <div className="heart">
              <button
                className="heartBtn"
                onClick={toggleLike}
                onMouseOver={mouseOverHeartHandler}
                onMouseOut={mouseOutHeartHandler}
              >
                {isLike ? (
                  <img
                    className="heartSolid"
                    src={heartSolid}
                    alt="heart-logo-solid"
                  />
                ) : (
                  <>
                    {hoverHeart ? (
                      <img
                        className="heartOutline"
                        src={heartOutline}
                        alt="heart-logo-outline"
                      />
                    ) : (
                      <img
                        className="heartLogo"
                        src={heartLogo}
                        alt="heart-logo"
                      />
                    )}
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
