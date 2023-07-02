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
        <Post
          photoUrl=""
          postImg=""
          userName="Akash Pandey"
          time="2 d"
          message="Hey!!, I am new here"
        />
        <Post
          photoUrl="http://images6.fanpop.com/image/photos/39500000/Facebook-dp-for-boys-Facebook-Cover-emo-boys-39573801-5184-3456.jpg"
          postImg="https://tse2.mm.bing.net/th?id=OIP.nklorQdjLJuloRgMo2ieYAHaEo&pid=Api&P=0&h=180"
          userName="Gautam Kumar"
          time="22 June 2023"
          message="This is my new post"
        />
      </div>
    </>
  );
};

export default Feed;
