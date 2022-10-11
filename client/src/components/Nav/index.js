import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


const Nav = () => {
  return (
<div>
    <nav class="navbar">	
    {Auth.loggedIn()? (
        <>
        <Link to="/itemlist">View Listings</Link>
        <Link to="/dashboard">My Listings</Link>
        </>
    ) : (
        <>
        <Link to="/itemlist">View Listings</Link>

        </>
    )}
    </nav>
</div>
  );
};

export default Nav;