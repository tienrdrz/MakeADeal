import React from "react";

import Auth from "../utils/auth";

const Home = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      {/* <div className="">
        {loggedIn && <div className=""></div>}

        {loggedIn && userData ? <div className=""></div> : null}
      </div> */}
      Hello world
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </main>

    // <div className="">
    //   <Menu />
    //   <ItemList />
    // </div>
  );
};

export default Home;
