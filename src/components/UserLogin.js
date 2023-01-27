import React, { Component } from 'react'
import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function Login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById('password').value;
    var user_name = document.getElementById('name').value;
    var user_location = document.getElementById('location').value;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) {
            navigate("/admin");
        }
    }, [user, loading]);

        return (
            <div className="container bg-light  mt-4 p-4">
            <div className= "row" >
                <div className="container card mt-4 p-4">
                    <div className="text-center">
                        <h4>Member Sign in</h4>
                    </div>
                    <div className="text-left">
                    <div className="card-body">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password"></input>
                     </div>
                     </div>
                    <div class="col text-center">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        );
    
} 
export default UserLogin ;