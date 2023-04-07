import React from 'react';
import "./FriendDetail.css"
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend);

    return (
        <div>
            <h3>Everything about this person is here :</h3>
            <h2>name : {friend.name}</h2>
        </div>
    );
};

export default FriendDetail;