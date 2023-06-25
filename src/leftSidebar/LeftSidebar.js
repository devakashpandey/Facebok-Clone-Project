import React from "react";
import "./LeftSidebar.css";
import { AiFillHome } from "react-icons/ai";
import { Avatar } from "@mui/material";
import pic from "./../assets/pic.png";
import { MdLiveTv } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FcShop } from "react-icons/fc";
import { FaGamepad } from "react-icons/fa";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { IoMdApps } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { BsLink45Deg } from "react-icons/bs";

const LeftSidebar = () => {
  return (
    <>
      <div className="left-sidebar">
        <div className="options">
          {" "}
          <AiFillHome style={{ color: "#2189e8" }} size={18} />
          <span>Home</span>
        </div>

        <div className="options line1">
          {" "}
          <Avatar
            src={pic}
            sx={{ width: 25, height: 25, marginLeft: "-4px" }}
          />
          <span>Akash Pandey</span>
        </div>

        <div className="options">
          {" "}
          <MdLiveTv style={{ color: "#2189e8" }} size={18} />
          <span>Watch</span>
        </div>

        <div className="options">
          {" "}
          <FaUserFriends style={{ color: "#2189e8" }} size={18} />
          <span>Friends</span>
        </div>

        <div className="options">
          <FcShop />
          <span>Marketplace</span>
        </div>

        <div className="options">
          <FaGamepad style={{ color: "#2189e8" }} size={18} />
          <span>Gaming</span>
        </div>

        <div className="options">
          {" "}
          <BsFillCalendar2EventFill style={{ color: "#ef622b" }} />
          <span>Events</span>
        </div>

        <div className="options">
          {" "}
          <IoMdApps className="other" />
          <span>See all</span>
        </div>

        <div className="options">
          {" "}
          <HiUserGroup className="other" />
          <span>See all groups</span>
        </div>

        <div className="options">
          <BsLink45Deg className="other" size={50} />
          <span>See all shortcuts</span>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
