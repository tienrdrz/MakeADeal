import React, { useState } from "react";
import ItemList from "../components/ItemList";
// import Auth from "../utils/auth";

const Home = () => {
  // const loggedIn = Auth.loggedIn();

  return (
    <main className="">
      {/* <div className="">
        {loggedIn && <div className=""></div>}

        {loggedIn && userData ? <div className=""></div> : null}
      </div> */}
      Hello world
      <ItemList />
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </main>
  );
};

export default Home;
