import { useState, useRef } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { uploadImage } from "../plugins/uploadImage";

export const PostImage = ({ addImageSuccessful }) => {
  // This code sends an API to a 3rd party library that uploads and serves the image
  // Added a spinner for user-experience and this component returns an image {fileURL}
  // Do not touch any of the code

  const imageInput = useRef();
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [isHidden, setIsHidden] = useState(false);

  const handleImageUpload = async (e) => {
    try {
      const { fileUrl } = await uploadImage.uploadFile(e.target.files[0], {
        onProgress,
      });
      imageInput.current.value = "";
      setImage(fileUrl);
      addImageSuccessful(fileUrl);
      setIsHidden(true);
    } catch (e) {
      console.warn(`Error: ${e}`);
    }
    setIsLoading(false);
  };
  const onProgress = ({ progress }) => {
    setIsLoading(true);
    console.log(`File uploading: ${progress}% complete.`);
  };

  const mouseOverHandler = () => {
    setIsHidden(false);
  };

  const mouseOutHandler = () => {
    setIsHidden(true);
  };

  return (
    <div
      className="image-uploader"
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      style={{
        backgroundImage: image ? `url(${image})` : "#f8f9fc",
        backgroundSize: "cover",
        opacity: isHidden ? "1" : "0.5",
      }}
    >
      {isLoading ? <LoadingSpinner /> : ""}
      <label
        className="image-button"
        style={{
          display: isHidden ? "none" : "block",
        }}
      >
        <input
          type="file"
          name="image_upload"
          onChange={handleImageUpload}
          ref={imageInput}
        />
        {isHidden ? "+ Add image" : "+ Add new image"}
      </label>
    </div>
  );
};
