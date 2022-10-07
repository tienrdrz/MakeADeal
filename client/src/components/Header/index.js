import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="Header">
      <div className="container">
        <Link to="/">
          <h1>Trading Exchange</h1>
        </Link>
        <nav className="nav">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Your Listings</Link>
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
  );
};

export default Header;

// import React from "react";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";

// function Nav() {
//   function showNavigation() {
//     if (Auth.loggedIn()) {
//       return (
//         <ul className="">
//           <li className="">
//             <a href="/" onClick={() => Auth.logout()}>
//               logout
//             </a>
//           </li>
//         </ul>
//       );
//     } else {
//       return (
//         <ul className="">
//           <li className="">
//             <Link to="/signup">Signup</Link>
//           </li>
//           <li className="">
//             <Link to="/login">Login</Link>
//           </li>
//         </ul>
//       );
//     }
//   }

//   return (
//     <header className="">
//       <h1>
//         <Link to="/">TradeWay</Link>
//       </h1>

//       <nav>{showNavigation()}</nav>
//     </header>
//   );
// }

// export default Nav;
