import React from "react";
import "./Header.css";
import logo from "../../assets/facebook.png";
import SearchIcon from "@mui/icons-material/Search";
import { BsMessenger } from "react-icons/bs";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, IconButton, Tooltip } from "@mui/material";

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
                  size={15}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton>
                <NotificationsIcon
                  style={{ color: "black", fontSize: "20px" }}
                />
              </IconButton>
            </Tooltip>
          </div>
          <div className="avatar">
            <Tooltip title="Account">
              <Avatar sx={{ width: 35, height: 35 }} />
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
