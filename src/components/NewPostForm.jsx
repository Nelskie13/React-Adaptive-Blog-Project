import React from "react";
import { PostImage } from "./PostImage";
import BlogReturn from "../Layouts/BlogReturn";

function NewPostForm() {
  return (
    <div className="NewsPostForm">
      <div className="NewPost-container">
        <BlogReturn />
        <p className="NewPost-title">New post</p>

        <p className="addtitle">Add title*</p>
        <textarea
          className="addTitle-textarea"
          placeholder="Our First Concert in the U.S.!"
        ></textarea>

        <p className="addText">Add text*</p>
        <textarea
          className="AddText-textarea"
          placeholder="It's official! We're coming to the U.S. for our first-ever concert! We're beyond excited to meet our American fans and show them what we've got. See you soon! 🎉🎤"
        ></textarea>

        <div className="PostBtn-container">
          <button className="PostBtn">Post</button>
        </div>
      </div>
      <div className="ImageUploader-container">
        <PostImage />
      </div>
    </div>
  );
}

export default NewPostForm;
