// Import images
import React from "react";
import picture1 from "../assets/Pictures/Image.png";
import picture2 from "../assets/Pictures/Image-1.png";
import picture3 from "../assets/Pictures/Image-2.png";
import picture4 from "../assets/Pictures/Image-3.png";
import picture5 from "../assets/Pictures/Image-4.png";
import picture6 from "../assets/Pictures/Image-5.png";
import picture7 from "../assets/Pictures/Image-6.png";
import picture8 from "../assets/Pictures/Image-7.png";
import picture9 from "../assets/Pictures/Image-8.png";
import picture10 from "../assets/Pictures/Image-9.png";
import picture11 from "../assets/Pictures/Image-10.png";
import picture12 from "../assets/Pictures/Image-11.png";
import picture13 from "../assets/Pictures/Image-12.jpg";
import picture14 from "../assets/Pictures/Image-13.jpg";
import picture15 from "../assets/Pictures/Image-14.jpg";
import picture16 from "../assets/Pictures/Image-15.jpg";
import picture17 from "../assets/Pictures/Image-16.jpg";
import picture18 from "../assets/Pictures/Image-17.jpg";
import picture19 from "../assets/Pictures/Image-18.jpg";
import picture20 from "../assets/Pictures/Image-19.jpg";
import commentLogo from "../assets/comment.svg";
import heartLogo from "../assets/heart.svg";
import heartSolid from "../assets/heartSolid.svg";
import { useMemo, useState } from "react";

const images = {
  1: picture1,
  2: picture2,
  3: picture3,
  4: picture4,
  5: picture5,
  6: picture6,
  7: picture7,
  8: picture8,
  9: picture9,
  10: picture10,
  11: picture11,
  12: picture12,
  13: picture13,
  14: picture14,
  15: picture15,
  16: picture16,
  17: picture17,
  18: picture18,
  19: picture19,
  20: picture20,
};

export const Post = ({
  id,
  title,
  text,
  date,
  author,
  comment,
  likes,
  isLiked,
  favoritePosts,
  setFavoritePosts,
}) => {
  const [isLike, setIsLiked] = useState(isLiked);
  const [postLikes, setPostLikes] = useState(likes);

  // Get the corresponding image for the post id
  const image = useMemo(() => images[id], [id]);

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
        <img className="Cards-image" src={image} alt="post" />
        <div className="Text-Props">
          <p className="Cards-title">{title}</p>
          <p className="Cards-text">{text}</p>
          <div className="likes-author-container">
            <p className="Cards-date">{date} </p>
            <p className="Cards-dot"> • </p>
            <p className="Cards-author"> {author}</p>
            <div className="comment">
              <button className="commentBtn">
                <img src={commentLogo} alt="comment-logo" />
              </button>
            </div>
            <p className="Cards-comment">{comment}k</p>
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
            <p className="Cards-likes">{postLikes}k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
