import React from 'react';
import postListSTyle from './PostList.module.css'
const PostList = (props) => {
    return (
        <div className={postListSTyle.list}>
        {
            props.postList.map((post)=>(
                <div className={postListSTyle.box}>
                <h1>Post Title : {post.title}</h1>
                <p>Post Content: {post.body} </p>
                </div>
            ))
        }
        </div>
    );
}

export default PostList;
