import commentLogo from "../assets/comment.svg";
// import heartLogo from "../assets/heart.svg";
import heartSolid from "../assets/heartSolid.svg";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../components/PostsContext";
import BlogReturn from "../Layouts/BlogReturn";
import Images from "./Images";

function PostDetails() {
  const { posts } = useContext(PostsContext);
  const { id } = useParams();
  const selectedPost = posts.find((post) => post.id === parseInt(id));

  return (
    <div className="PostDetails-container">
      <div className="Cards-PostDetails">
        <div className="PostDetails-Props">
          <BlogReturn />
          <p className="PostDetails-title">{selectedPost.title}</p>
          <div className="author-date-container">
            <p className="PostDetails-author"> {selectedPost.author}</p>
            <p className="PostDetails-date">{selectedPost.date} </p>
          </div>
          <p className="PostDetails-text">{selectedPost.text}</p>
          <div className="likes-author-PostDetails">
            <div className="PostDetails-comment">
              <button className="commentBtn">
                <img src={commentLogo} alt="comment-logo" />
              </button>
            </div>
            <p className="Cards-comment">{selectedPost.comment}k</p>
            <div className="PostDetails-heart">
              <button className="heartBtn">
                <img
                  className="heartSolid"
                  src={heartSolid}
                  alt="heart-logo-solid"
                />
              </button>
            </div>
            <p className="Cards-likes">{selectedPost.likes}k</p>
          </div>
          <p className="LeaveComment">Leave a comment:</p>
          <div className="Comment-container">
            <input className="textarea" type="text" placeholder="Comments..." />
            <div className="sendBtn">
              <p>Send</p>
            </div>
          </div>
          <p className="line"></p>
        </div>
      </div>
      <div className="PostDetail-img-container">
        <Images className="PostDetail-img" id={selectedPost.id} />
      </div>
    </div>
  );
}

export default PostDetails;
