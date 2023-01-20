import React from 'react';
import {useLoaderData} from 'react-router-dom';
function PostPage(props) {
    const post = useLoaderData()
    const postList = post.map((post) => {
        return (<li key={post.id}>
            <h3>
                {post.title}
            </h3>
            <p>
                {post.body}
            </p>
            </li>)
    })
    return (
        <div>
            {postList}
        </div>
    );
}

export default PostPage;