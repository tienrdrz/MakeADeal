import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return(
        <header className='Header'>
            <div className='container'>
                <Link to="/">
                <h1 className='title'>Trading Exchange</h1>
                </Link>
                <nav className='nav'>
                    {Auth.loggedIn()? (
                       <>
                       <Link to="/profile">Your Listings
                       </Link>
                       <a href="/" onClick={logout}>
                         <div className='logout'>Logout</div>
                       </a>
                     </>
                   ) : (
                     <>
                       <Link to="/login"><div className='login'>Login</div></Link>
                       <Link to="/signup"><div className='signup'>Signup</div></Link>
                     </>
                   )}
                 </nav>
            </div>
        </header>
    )
}

export default Header;