import commentLogo from "../assets/comment.svg";
import jenny from "../assets/jenny.svg";
import unknownPic from "../assets/unknownPic.svg";
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
            <img src={jenny} />
            <p className="PostDetails-author"> {selectedPost.author}</p>
            <p className="PostDetails-date">{selectedPost.date} </p>
          </div>
          <p className="PostDetails-text">{selectedPost.text}</p>

          <div className="likes-author-PostDetails">
            <div className="PostDetails-comment">
              <button className="commentBtn">
                <img src={commentLogo} alt="comment-logo" />
              </button>
              <p className="Cards-comment">{selectedPost.comments.length}</p>
            </div>

            <div className="PostDetails-heart">
              <button className="heartBtn">
                <img
                  className="heartSolid"
                  src={heartSolid}
                  alt="heart-logo-solid"
                />
              </button>
              <p className="Cards-likes">{selectedPost.likes}k</p>
            </div>
          </div>

          <p className="LeaveComment">Leave a comment:</p>

          <div className="Comment-container">
            <textarea className="textarea" placeholder="Comment..."></textarea>
            <div className="sendContainer">
              <button className="sendBtn">Send</button>
            </div>
          </div>
          <p className="line"></p>

          <p className="Comments">Comments: </p>
        </div>
        <div className="Comment-List">
          {selectedPost.comments.map((comment, index) => (
            <div className="EachComment" key={index}>
              <div className="unknown-pic">
                <img src={unknownPic} />
              </div>
              <div className="Comment-props">
                <p className="comment-author">{comment.author}</p>
                <p className="comment-text">{comment.text}</p>
                <div className="heart-date-container">
                  <div className="comment-date">{comment.date}</div>
                  <div className="Comment-heart">
                    <button className="heartBtn">
                      <img
                        className="comment-heart-solid"
                        src={heartSolid}
                        alt="heart-logo-solid"
                      />
                    </button>
                  </div>
                  <p className="comment-likes">{comment.likes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="showMore-container">
          <button className="showMore">Show more</button>
        </div>
      </div>
      <div className="PostImage-container">
        <Images className="PostDetail-img" id={selectedPost.id} />
      </div>
    </div>
  );
}

export default PostDetails;
