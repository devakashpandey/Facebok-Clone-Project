import React from "react";
import "./Header.css";
import logo from "../../assets/facebook.png";
import SearchIcon from "@mui/icons-material/Search";
import { BsMessenger } from "react-icons/bs";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <img src={logo} alt="facebook" />
        </div>

        <div className="header-mid">
          <SearchIcon />
          <input placeholder="Search Facebook" />
        </div>

        <div className="header-right">
          <div className="header-info">
            <BsMessenger />
            <NotificationsIcon />
            <Avatar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
