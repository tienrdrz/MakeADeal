import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div class="container">
      <div class="form-box">
        {/* <!-- signup --> */}
        <div class="register-box ">
          <h1>register</h1>
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Signup</button>
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
