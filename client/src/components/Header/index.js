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
                <h1>Trading Exchange</h1>
                </Link>
                <nav className='nav'>
                    {Auth.loggedIn()? (
                       <>
                       <Link to="/profile">Your Listings
                       </Link>
                       <a href="/" onClick={logout}>
                         Logout
                       </a>
                     </>
                   ) : (
                     <>
                       <Link to="/login">Login</Link>
                       <Link to="/signup">Signup</Link>
                     </>
                   )}
                 </nav>
            </div>
        </header>
    )
}

export default Header;