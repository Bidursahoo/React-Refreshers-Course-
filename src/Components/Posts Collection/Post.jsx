import React from 'react';
import PostList from './Post List/PostList';

const Post = () => {
    const arrayOfPosts = [
        {
            title: "First Title",
            body: "First Body"
        },
        {
            title: "Second Title",
            body: "Second Body"
        }
    ]
    return (
        <>
            <h1>Hello This is Post</h1>
            <PostList postList={arrayOfPosts}/>
        </>
    );
}

export default Post;
