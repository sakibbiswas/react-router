import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Postdetail = () => {
    const post = useLoaderData()
    console.log(post)
    const { id, title, useId, body } = post;
    return (
        <div>
            <h3>post details about your post</h3>
            <h4>{title}</h4>
            <h4>{useId}</h4>
        </div>
    );
};

export default Postdetail;