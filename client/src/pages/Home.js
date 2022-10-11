import React, { useState } from "react";
import ItemList from "../components/ItemList";
import Dashboard from "./Dashboard";
import Auth from "../utils/auth";

const Home = () => {

  return (
    <main className="">
      {Auth.loggedIn() ? (
        <Dashboard />
      ) : (
      <ItemList />
      )}
    </main>
  );
};

export default Home;
