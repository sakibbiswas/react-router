import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import Activelink from '../activelink/Activelink';


const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Activelink to="about">About</Activelink>
            <Activelink to="contact">Contact</Activelink>
            <Activelink to="/friends">friends</Activelink>
            <Activelink to="/posts">posts</Activelink>

        </nav >
    );
};

export default Header;