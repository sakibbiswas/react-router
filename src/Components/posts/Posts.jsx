import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Singlepost from '../singlepost/Singlepost';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h3>post:{posts.length}</h3>
            <div >
                {
                    posts.map(post => <Singlepost
                        key={post.id}
                        post={post}></Singlepost>)
                }
            </div>
        </div>
    );
};

export default Posts;