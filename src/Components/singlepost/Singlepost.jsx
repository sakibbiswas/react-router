import React from 'react';
import { Link } from 'react-router-dom';
import "./Singlepost.css"

const Singlepost = ({ post }) => {
    const { id, title, body } = post;
    return (
        <div className='singlepost'>
            <h2>post:{id}</h2>
            <p>post:{title}</p>
            <h6>post:{body}</h6>
            <Link to={`/post /${id}`}>sho post</Link>
            <Link to={`/post / ${id}`}><button>show post</button></Link>
        </div>
    );
};

export default Singlepost;