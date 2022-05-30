import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-slate-50 p-5'>
            <nav className='m-4 '>
                <Link className='text-neutral-600 hover:text-orange-600' to='/home'>HOME</Link>
                <Link className='text-neutral-600 hover:text-orange-600' to='/reviews'>REVIEWS</Link>
                <Link className='text-neutral-600 hover:text-orange-600' to='/dashboard'>DASHBOARD</Link>
                <Link className='text-neutral-600 hover:text-orange-600' to='/blogs'>BLOGS</Link>
            </nav>

        </div>
    );
};

export default Header;