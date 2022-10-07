import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { SignIn } from '../utils/login'

import Auth from '../utils/auth';

const Login = () => {

    return (
      <main>
        <div className='login-container'>
            <h2>Login</h2>
            <form>
                <div className='input'>
                    <label>Email:</label>
                    <input type='email' id='email' 
                    name='email' placeholder="example@mail.com"></input>
                </div>
                <div className='input'>
                    <label>Password:</label>
                    <input type="password" id="password" 
                    name="password" placeholder="Password"></input>
                </div>
                <div className="submit-btn">
                        <input type="submit" className="button" 
                        id="signin" value="Sign In"></input>
                    </div>
            </form>
        </div>
      </main>  
    )
}

export default Login;