import React from "react";
import PostList from "./Post List/PostList";
const Post = (props) => {
  return (
    <>
      <h1>Hello This is Post</h1>
      <PostList postList={props.arrayOfPost} />
    </>
  );
};

export default Post;
