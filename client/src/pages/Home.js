import React from 'react';


import Auth from '../utils/auth';


const Home = () => {

  const loggedIn = Auth.loggedIn();

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
