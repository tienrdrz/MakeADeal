import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        {Auth.loggedIn() ? (
          <>
            <Link to="/">View Listings</Link>
            <Link to="/dashboard">My Listings</Link>
          </>
        ) : (
          <>
            <Link to="/">View Listings</Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Nav;
