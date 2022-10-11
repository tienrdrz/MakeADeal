import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="">
      <header className="header">
        <Link to="/">
          <h1>Trading Exchange</h1>
        </Link>
        <nav className="nav">
          {Auth.loggedIn() ? (
            <>
    
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <div className="login-signup-list">
              <div className="login">
                <Link to="/login">Login</Link>
              </div>
              <div className="signup">
                <Link to="/signup">Signup</Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;

// import React from "react";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";

// function Header() {
//   function showNavigation() {
//     if (Auth.loggedIn()) {
//       return (
//         <ul className="login-signup-list">
//           <li>
//             <Link to="/profile">Your Listings</Link>
//           </li>
//           <li className="logout">
//             <a href="/" onClick={() => Auth.logout()}>
//               logout
//             </a>
//           </li>
//         </ul>
//       );
//     } else {
//       return (
//         <ul className="login-signup-list">
//           <li className="signup">
//             <Link to="/signup">Signup</Link>
//           </li>
//           <li className="login">
//             <Link to="/login">Login</Link>
//           </li>
//         </ul>
//       );
//     }
//   }

//   return (
//     <header className="header">
//       <h1>
//         <Link to="/">Trading Exchange</Link>
//       </h1>

//       <nav>{showNavigation()}</nav>
//     </header>
//   );
// }

// export default Header;
