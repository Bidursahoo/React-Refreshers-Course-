import React from "react";
import PostList from "./Post List/PostList";
import arrayOfPost from "../../Data/ArrayOfList";
const Post = () => {
  return (
    <>
      <h1>Hello This is Post</h1>
      <PostList postList={arrayOfPost} />
    </>
  );
};

export default Post;
