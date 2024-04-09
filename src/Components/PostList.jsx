import React from 'react';
import postListSTyle from './PostList.module.css'
const PostList = (props) => {
    return (
        <>
        {
            props.postList.map((post)=>(
                <div className={postListSTyle.box}>
                <h1>Post Title : {post.title}</h1>
                <p>Post Content: {post.content} </p>
                </div>
            ))
        }
        </>
    );
}

export default PostList;
