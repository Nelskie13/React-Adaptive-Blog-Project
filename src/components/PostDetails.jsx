import commentLogo from "../assets/comment.svg";
// import heartLogo from "../assets/heart.svg";
// import heartSolid from "../assets/heartSolid.svg";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../components/PostsContext";

function PostDetails() {
  const { posts } = useContext(PostsContext);
  const { id } = useParams();
  const selectedPost = posts.find((post) => post.id === parseInt(id));

  return (
    <div className="cards-container">
      <div className="Cards-details">
        <img className="Cards-image" src={selectedPost.images} alt="image" />
        <div className="Text-Props">
          <p className="Cards-title">{selectedPost.title}</p>
          <p className="Cards-text">{selectedPost.text}</p>
          <div className="likes-author-container">
            <p className="Cards-date">{selectedPost.date} </p>
            <p className="Cards-dot"> • </p>
            <p className="Cards-author"> {selectedPost.author}</p>
            <div className="comment">
              <button className="commentBtn">
                <img src={commentLogo} alt="comment-logo" />
              </button>
            </div>
            <p className="Cards-comment">{selectedPost.comment}k</p>
            {/* <div className="heart">
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
            </div> */}
            <p className="Cards-likes">{selectedPost.postLikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
