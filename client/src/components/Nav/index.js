import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


const Nav = () => {
  return (
<div>
    <nav class="navbar">	
    {Auth.loggedIn()? (
        <>
        <Link to="/">Home</Link>
        <Link to="/dashboard">My Listings</Link>
        </>
    ) : (
        <>
        <Link to="/">Home</Link>
        </>
    )}
    </nav>
</div>
  );
};

export default Nav;