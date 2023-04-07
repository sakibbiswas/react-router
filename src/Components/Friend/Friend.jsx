import React from 'react';
import "./Friend.css"
import { Link } from 'react-router-dom';
const Friend = ({ friend }) => {
    // console.log(friend);
    const { id, name, email, phone } = friend;
    return (
        <div className='friend'>
            <h4>name:{name}</h4>
            <h4>email:{email}</h4>
            <h4>phone:{phone}</h4>
            <p><Link to={`/friend/ ${id} `}>show me detail</Link></p>
        </div>
    );
};

export default Friend;