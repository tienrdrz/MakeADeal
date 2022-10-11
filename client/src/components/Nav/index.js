import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils';


const Nav = () => {
  return (
<div>
    <nav class="navbar">	
    {Auth.loggedIn()? (
        <>
        <Link to="/itemlist">View Listings</Link>
        </>
    ) : (
        <>
        <Link to="/itemlist"><h2>View Listings</h2></Link>
        <Link to="/dashboard"><h2>My Listings</h2></Link>
        </>
    )}
    </nav>
</div>
  );
};

export default Nav;