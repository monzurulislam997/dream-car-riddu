import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='m-4 '>
                <Link className='hover:text-orange-600' to='/home'>HOME</Link>
                <Link className='hover:text-orange-600' to='/reviews'>REVIEWS</Link>
                <Link className='hover:text-orange-600' to='/dashboard'>DASHBOARD</Link>
                <Link className='hover:text-orange-600' to='/blogs'>BLOGS</Link>
            </nav>

        </div>
    );
};

export default Header;