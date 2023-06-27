import { Avatar } from "@mui/material";
import React from "react";

const PostUpload = () => {
  return (
    <>
      <div className="post-upload">
        POST UPLOAD
        <div className="top-section">
          <Avatar />
          <form>
            <input placeholder="What's on your mind, Akash?" />
          </form>
        </div>
        <div className="bottom-section">
          <div className="upload-option"></div>
        </div>
      </div>
    </>
  );
};

export default PostUpload;
