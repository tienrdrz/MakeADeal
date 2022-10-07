import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils';


const Nav = () => {
  return (
<div>
    <nav class="navbar">	
    {Auth.loggedIn()? (
        <>
        <Link to="/buy">Buy</Link>
        </>
    ) : (
        <>
        <Link to="/buy"><h2>Buy</h2></Link>
        <Link to="/sell"><h2>Sell</h2></Link>
        <Link to="/trade"><h2>Trade</h2></Link>
        </>
    )}
    </nav>
</div>
  );
};

export default Nav;