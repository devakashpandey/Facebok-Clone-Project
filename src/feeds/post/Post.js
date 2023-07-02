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
            <Avatar src={myPic} sx={{ height: "45px", width: "45px" }} />
            <div className="post-info">
              <h4>Akash Pandey</h4>
              <div className="time">
                {" "}
                <p>22 June 2023 · </p>
                <MdOutlinePublic size={12} title="Public" />
              </div>
            </div>
          </div>

          <FiMoreHorizontal
            style={{ marginRight: "15px", marginTop: "5px", color: "#65676b" }}
          />
        </div>

        <div className="post_middle">
          <p>Message Body</p>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.NbfPECA64xbFnmW58MbWDQHaEo&pid=Api&P=0&h=180"
            alt="post-image"
          />
        </div>

        <div className="post_bottom">
          <div className="post_bottom_options">
            <FiThumbsUp /> <p>Like</p>
          </div>
          <div className="post_bottom_options">
            <GoComment /> <p>Comment</p>
          </div>
          <div className="post_bottom_options">
            <PiShareFat size={18} /> <p>Share</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
