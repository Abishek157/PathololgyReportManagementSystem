import React, { useState } from 'react';
import './pathologylogin.css';

const PathologyLogin = ()=>{
    const [email,setEmail]= useState('');
    const [password,setPassword]=useState('');

    const handleSubmit = (event)=>{
        event.preventDefalt();
        console.log(email);
        console.log(password);
    }

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input type="email"
                    id = "email"
                    placeholder='email address'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required />
                </div>
                <div className='form-group'>
                    <input type="password" id="password"
                    placeholder='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required />
                </div>
                <button type='submit'>LOGIN</button>
                <div className='signup-link'>
                    <a href="#">Sign Up</a>
                </div>
            </form>
        </div>

    )
}
export default PathologyLogin;
