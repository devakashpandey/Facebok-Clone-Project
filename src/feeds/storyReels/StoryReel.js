import React from "react";
import "./StoryReel.css";
import { Avatar } from "@mui/material";

const StoryReel = () => {
  return (
    <>
      <div className="storyReel">
        <div
          className="story"
          style={{
            backgroundImage: `url("https://wallpapercave.com/wp/wp2775196.jpg")`,
          }}
        >
          <Avatar />
          <h4>Vikash Singh</h4>
        </div>

        <div
          className="story"
          style={{
            backgroundImage: `url("https://wallpapercave.com/wp/wp2775306.jpg")`,
          }}
        >
          <Avatar />
          <h4>Hariom Raaj</h4>
        </div>

        <div
          className="story"
          style={{
            backgroundImage: `url("https://i.pinimg.com/originals/66/8c/27/668c2724434c9a02dceb471ba3aafe41.jpg")`,
          }}
        >
          <Avatar />
          <h4>Dimple singh</h4>
        </div>

        <div
          className="story"
          style={{
            backgroundImage: `url("http://cdn130.picsart.com/299422927035201.jpg")`,
          }}
        >
          <Avatar />
          <h4>Yash Pandey</h4>
        </div>
      </div>
    </>
  );
};

export default StoryReel;
