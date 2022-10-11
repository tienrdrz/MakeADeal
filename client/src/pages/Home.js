import React, { useState } from "react";
import ItemList from "../components/ItemList";
//import Dashboard from "./Dashboard";
//import Auth from "../utils/auth";

const Home = () => {
  return (
    <main>
      <div className="">
        <h1>Test HomePage</h1>
        {loggedIn && (
          <div className="">
            
          </div>
        )}
    
        {loggedIn ? (
          <div className="">
            
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
