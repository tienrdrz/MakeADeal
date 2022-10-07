import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div class="container">
      <div class="form-box">
        {/* <!-- login --> */}
        <div class="login-box">
          <h1>login</h1>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Login</button>
        </div>
      </div>
      <div class="con-box right">
        <h2>
          Welcome to <span>TradeWay</span>
        </h2>
        <p>
          Come and look your exciting <span>items</span>
        </p>
        <img src="" alt="" />
        <p>Don't have an account</p>
        <button id="register">Go Signup</button>
      </div>
    </div>
  );
}

export default Signup;
