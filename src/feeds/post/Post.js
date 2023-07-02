import React from "react";
import "./Post.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { Avatar } from "@mui/material";
import { MdOutlinePublic } from "react-icons/md";
import myPic from "../../assets/pic.png";
import { FiThumbsUp } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import { PiShareFat } from "react-icons/pi";

const Post = ({ photoUrl, postImg, userName, time, message }) => {
  return (
    <>
      <div className="post">
        <div className="post_top">
          <div className="name-section">
            <Avatar
              src={photoUrl}
              sx={{ height: "35px", width: "35px" }}
              style={{ cursor: "pointer" }}
            />
            <div className="post-info">
              <h4>{userName}</h4>
              <div className="time">
                {" "}
                <p>{time} · </p>
                <MdOutlinePublic size={12} title="Public" />
              </div>
            </div>
          </div>
          <div className="more-option">
            <FiMoreHorizontal />
          </div>
        </div>

        <div className="post_middle">
          <p>{message}</p>
          {postImg && <img src={postImg} alt="post-image" />}
        </div>

        <div className="post_bottom">
          <div className="post_bottom_options">
            <FiThumbsUp /> <p>Like</p>
          </div>
          <div className="post_bottom_options">
            <GoComment /> <p>Comment</p>
          </div>
          <div className="post_bottom_options ">
            <PiShareFat size={18} /> <p>Share</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
