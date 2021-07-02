import React from 'react';
import axios from 'axios';

function Login(){
    return(
        <div class="auth-div">
            <div class="title">Login</div>
            <div class="auth-form">
            <form onSubmit={e => loginRequest(e)}>
                <div class="username"><input type="username" class="user-input" placeholder="username" id="username"></input></div>
                <div class="password"><input type="password" class="pass-input" placeholder="password" id="password"></input></div>
                <button class="auth-submit" type="submit">Register</button>
            </form>
            </div>
        </div>
    );
};

async function loginRequest(e){
    e.preventDefault();
    let request ={
        pseudo : document.getElementById("username").value,
        password : document.getElementById("password").value
    };
     let res = await axios.post('http://192.168.0.37:4500/login', request).catch(err => {
        console.error(err);
    });
    console.log(res);
};

export default Login;