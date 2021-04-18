import React from 'react'
import axios from 'axios';

function Register(){
    return(
        <div class="auth-div">
            <div class="title">Register</div>
            <div class="auth-form">
            <form onSubmit={e => registerRequest(e)}>
                <div class="username"><input type="username" class="user-input" placeholder="username" id="username"></input></div>
                <div class="password"><input type="password" class="pass-input" placeholder="password" id="password"></input></div>
                <button class="auth-submit" type="submit">Register</button>
            </form>
            </div>
        </div>
    );
};

function registerRequest(e){
    e.preventDefault();
    let request ={
        pseudo : document.getElementById("username").value,
        password : document.getElementById("password").value
    };
    axios.post('/register', request).then(resp => {
        alert(resp.data.message);
    })
    .catch(err => {
        console.error(err);
    });
};

export default Register;