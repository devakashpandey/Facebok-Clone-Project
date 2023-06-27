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
          <Avatar
            src="https://tse4.mm.bing.net/th?id=OIP.wgEzlKddaEirNaX1pCDtnQHaLG&pid=Api&P=0&h=180"
            sx={{ height: "35px", width: "35px" }}
            style={{ border: "2px solid #2189e8" }}
          />
          <h4>Vikash Singh</h4>
        </div>

        <div
          className="story"
          style={{
            backgroundImage: `url("https://wallpapercave.com/wp/wp2775306.jpg")`,
          }}
        >
          <Avatar
            src="https://www.teahub.io/photos/full/108-1085401_simple-boy-pic-dp.jpg"
            sx={{ height: "35px", width: "35px" }}
            style={{ border: "2px solid #2189e8" }}
          />
          <h4>Hariom Raaj</h4>
        </div>

        <div
          className="story"
          style={{
            backgroundImage: `url("https://i.pinimg.com/originals/66/8c/27/668c2724434c9a02dceb471ba3aafe41.jpg")`,
          }}
        >
          <Avatar
            src="https://www.imagesplatform.com/mohsin_site/uploads/2019_10_09/a9a98243b190f1ba.jpg"
            sx={{ height: "35px", width: "35px" }}
            style={{ border: "2px solid #2189e8" }}
          />
          <h4>Dimple singh</h4>
        </div>

        <div
          className="story"
          style={{
            backgroundImage: `url("http://cdn130.picsart.com/299422927035201.jpg")`,
          }}
        >
          <Avatar
            src="https://wallpapercave.com/wp/wp5047332.jpg"
            sx={{ height: "35px", width: "35px" }}
            style={{ border: "2px solid #2189e8" }}
          />
          <h4>Yash Pandey</h4>
        </div>

        <div
          className="story"
          style={{
            backgroundImage: `url("https://wallpapercave.com/wp/wp4829130.jpg")`,
          }}
        >
          <Avatar
            src="https://images.statusfacebook.com/profile_pictures/boys-dp/boys-dp-142.jpg"
            sx={{ height: "35px", width: "35px" }}
            style={{ border: "2px solid #2189e8" }}
          />
          <h4>Shiv Kumar</h4>
        </div>
      </div>
    </>
  );
};

export default StoryReel;
