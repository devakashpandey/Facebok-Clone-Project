import { Avatar } from "@mui/material";
import React from "react";
import "./PostUpload.css";
import { RiLiveFill } from "react-icons/ri";
import { MdPhotoLibrary } from "react-icons/md";
import { FaRegLaugh } from "react-icons/fa";
import myPic from "../../assets/pic.png";

const PostUpload = () => {
  return (
    <>
      <div className="post-upload">
        <div className="top-section">
          <Avatar src={myPic} sx={{ height: "45px", width: "45px" }} />
          <form>
            <input placeholder="What's on your mind, Akash?" />
          </form>
        </div>
        <div className="bottom-section">
          <div className="upload-option">
            <RiLiveFill style={{ color: "red" }} size={20} />
            <p>Live video</p>
          </div>
          <div className="upload-option">
            <MdPhotoLibrary style={{ color: "#45bd62" }} size={20} />
            <p>Photo/video</p>
          </div>
          <div className="upload-option">
            <FaRegLaugh style={{ color: "#f7b928" }} size={20} />
            <p>Feeling/activity</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostUpload;
