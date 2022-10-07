import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SignUp } from '../utils/signup';

import Auth from '../utils/auth';

const Signup = () => {
    return (
        <main>
            <div className='signup-container'>
                <h2>Sign Up</h2>
                <form>
                <div className='input'>
                    <label>Username:</label>
                    <input type='username' id='username' 
                    name='username' placeholder="Username"></input>
                </div>
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
};

export default Signup;