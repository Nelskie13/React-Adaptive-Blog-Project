import commentLogo from "../assets/comment.svg";
import jenny from "../assets/jenny.svg";
import unknownPic from "../assets/unknownPic.svg";
import heartSolid from "../assets/heartSolid.svg";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../components/PostsContext";
import BlogReturn from "../Layouts/BlogReturn";
import Images from "./Images";

function PostDetails() {
  const { posts, setPosts } = useContext(PostsContext);
  const { id } = useParams();
  const selectedPost = posts.find((post) => post.id === parseInt(id));
  const [newComment, setNewComment] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);

  // Function to handle adding a new comment to a post
  const addComment = () => {
    // Get the current date
    const currentDate = new Date();

    // Format the current date as a string in the desired format
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const updatedPosts = posts.map((post) => {
      // Check if the current post's id matches the provided id
      if (post.id === parseInt(id)) {
        // Create a new array of comments with the updated comment included
        const updatedComments = [
          ...post.comments,
          {
            author: selectedPost.author,
            text: newComment,
            date: formattedDate,
          },
        ];
        // Return a new object with the updated comments array for the matched post
        return { ...post, comments: updatedComments };
      }
      // If the current post's id does not match, return it as is
      return post;
    });
    // Update the state variable 'posts' with the updated array of posts
    setPosts(updatedPosts);
    // Clear the 'newComment' state variable
    setNewComment("");
  };

  // Function to handle input change in the comment textarea
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  // Function to handle "Show more" button click
  const handleShowMore = () => {
    setShowAllComments(true);
  };

  // Function to handle "Show less" button click
  const handleShowLess = () => {
    setShowAllComments(false);
  };

  // Determine the comments to show based on the showAllComments state
  const commentsToShow = showAllComments
    ? selectedPost.comments
    : selectedPost.comments.slice(0, 2);

  return (
    <div className="PostDetails-container">
      <div className="Cards-PostDetails">
        <div className="PostDetails-Props">
          <BlogReturn />
          <p className="PostDetails-title">{selectedPost.title}</p>
          <div className="author-date-container">
            <img src={jenny} />
            <p className="PostDetails-author">{selectedPost.author}</p>
            <p className="PostDetails-date">{selectedPost.date}</p>
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
              <p className="Cards-likes">{selectedPost.likes}</p>
            </div>
          </div>

          <p className="LeaveComment">Leave a comment:</p>

          <div className="Comment-container">
            <textarea
              className="textarea"
              placeholder="Comment..."
              value={newComment}
              onChange={handleCommentChange}
            ></textarea>
            <div className="sendContainer">
              <button className="sendBtn" onClick={addComment}>
                Send
              </button>
            </div>
          </div>
          <p className="line"></p>

          <p className="Comments">Comments: </p>
        </div>
        <div className="Comment-List">
          {commentsToShow.map((comment, index) => (
            <div className="EachComment" key={index}>
              <div className="unknown-pic">
                <img src={unknownPic} alt="unknown" />
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
          {selectedPost.comments.length > 2 && (
            <div className="showMore-container">
              {showAllComments ? (
                <button className="showMore" onClick={handleShowLess}>
                  Show less
                </button>
              ) : (
                <button className="showMore" onClick={handleShowMore}>
                  Show more
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="PostImage-container">
        <Images
          className="PostDetail-img"
          id={selectedPost.id}
          imageURL={selectedPost.imageURL}
        />
      </div>
    </div>
  );
}

export default PostDetails;
