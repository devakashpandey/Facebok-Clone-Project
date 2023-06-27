import React from "react";
import StoryReel from "./storyReels/StoryReel";
import "./Feed.css";
import PostUpload from "./postUpload/PostUpload";

const Feed = () => {
  return (
    <>
      <div className="feed">
        {/* reels section */}
        <StoryReel />
        {/* post upload section */}
        <PostUpload />
        {/* all posts section */}
      </div>
    </>
  );
};

export default Feed;
