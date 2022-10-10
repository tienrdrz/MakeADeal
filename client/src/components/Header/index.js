import React from 'react';
//import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return(
        <header className='Header'>
            <div className='container'>
                
                <h1>Trading Exchange</h1>
                
                <nav className='nav'>
                    {Auth.loggedIn()? (
                       <>
                     
                       <a href="/" onClick={logout}>
                         Logout
                       </a>
                     </>
                   ) : (
                     <>
                      
                     </>
                   )}
                 </nav>
            </div>
        </header>
    )
}

export default Header;