import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/home'>HOME</Link>
                <Link to='/reviews'>REVIEWS</Link>
                <Link to='/dashboard'>DASHBOARD</Link>
                <Link to='/blogs'>BLOGS</Link>
            </nav>

        </div>
    );
};

export default Header;