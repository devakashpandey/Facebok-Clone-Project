import React from "react";
import StoryReel from "./storyReels/StoryReel";
import "./Feed.css";
import PostUpload from "./postUpload/PostUpload";
import Post from "./post/Post";
// import myImg from "../assets/pic.png";

const Feed = () => {
  return (
    <>
      <div className="feed">
        {/* reels section */}
        <StoryReel />
        {/* post upload section */}
        <PostUpload />
        {/* all posts section */}
        <Post />
        <Post
          photoUrl=""
          postImg="https://tse2.mm.bing.net/th?id=OIP.nklorQdjLJuloRgMo2ieYAHaEo&pid=Api&P=0&h=180"
          userName="Akash Pandey"
          time="12.30 Am"
          message="This is my new post"
        />
      </div>
    </>
  );
};

export default Feed;
