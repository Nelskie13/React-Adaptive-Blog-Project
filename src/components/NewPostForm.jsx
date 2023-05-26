import React, { useContext, useState } from "react";
import { PostImage } from "./PostImage";
import BlogReturn from "../Layouts/BlogReturn";
import { PostsContext } from "../components/PostsContext";
import { NavLink } from "react-router-dom";

function NewPostForm() {
  const { posts, setPosts } = useContext(PostsContext);
  const [title, setTitle] = useState([]);
  const [text, setText] = useState([]);
  const [imageURL, setImageURL] = useState([]); // Added state for image URL

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handlePost = () => {
    const newPost = {
      id: posts.length + 1,
      title: title,
      text: text,
      comments: [],
      likes: 0,
      imageURL: imageURL, // Include the imageURL in the new post object
    };

    setPosts([...posts, newPost]);

    // Clear the input fields after posting
    setTitle([]);
    setText([]);
    setImageURL([]); // Reset the imageURL state
  };

  // Update the imageURL state with the uploaded image URL
  const addImageSuccess = (imageURL) => {
    setImageURL(imageURL);
  };

  return (
    <div className="NewsPostForm">
      <div className="NewPost-container">
        <BlogReturn />
        <p className="NewPost-title">New post</p>

        <p className="addtitle">Add title*</p>
        <textarea
          className="addTitle-textarea"
          placeholder="Our First Concert in the U.S.!"
          value={title}
          onChange={handleTitleChange}
        ></textarea>

        <p className="addText">Add text*</p>
        <textarea
          className="AddText-textarea"
          placeholder="It's official! We're coming to the U.S. for our first-ever concert! We're beyond excited to meet our American fans and show them what we've got. See you soon! 🎉🎤"
          value={text}
          onChange={handleTextChange}
        ></textarea>

        <div className="PostBtn-container">
          <NavLink className="PostBtn" to="/Allpost" onClick={handlePost}>
            Post
          </NavLink>
        </div>
      </div>
      <div className="ImageUploader-container">
        <PostImage addImageSuccessful={addImageSuccess} />
      </div>
    </div>
  );
}

export default NewPostForm;
