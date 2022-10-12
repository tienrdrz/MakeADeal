
import ItemList from "../components/ItemList";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { QUERY_ITEM } from "../utils/queries";

//import Dashboard from "./Dashboard";
//import Auth from "../utils/auth";



const Home = () => {
  return (
    <main>
      <div className="">
        <h1>Trading Way</h1>
        
        <Link to="/login">Login</Link>
        <h2>Dashboard</h2>
        
        <div>
        
        </div>
        <h2></h2>
        
      </div>
      <ItemList></ItemList>
    </main>
  );
};

export default Home;
