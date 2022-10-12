
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
        
        
        
        
      
      <ItemList></ItemList>
      </div>
    </main>
  );
};

export default Home;
