import React from "react";
import "./Header.css";
import logo from "../../assets/facebook.png";
import SearchIcon from "@mui/icons-material/Search";
import { BsMessenger } from "react-icons/bs";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import pic from "../../assets/pic.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <img src={logo} alt="facebook" />
        </div>

        <div className="header-mid">
          <SearchIcon style={{ fontSize: "18px" }} />
          <input placeholder="Search Facebook" />
        </div>

        <div className="header-right">
          <div className="header-info">
            <Tooltip title="Messenger">
              <IconButton>
                <BsMessenger
                  style={{
                    color: "black",
                  }}
                  size={14}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton>
                <NotificationsIcon
                  style={{ color: "black", fontSize: "18px" }}
                />
              </IconButton>
            </Tooltip>
          </div>
          <div className="avatar">
            <Tooltip title="Account">
              <Avatar alt="Profile" src={pic} sx={{ width: 37, height: 37 }} />
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
