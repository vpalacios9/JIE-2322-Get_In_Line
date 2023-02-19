import { Component } from 'react';
import { useNavigate, useSubmit } from 'react-router-dom';
import React, { useState} from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { auth, database } from '../firebaseConfig';

import { setDoc, doc } from '@firebase/firestore';
const UserAddInfo  = () => {
    const user = auth.currentUser;
    const navigate = useNavigate();
    
    if (!user) navigate("/login");


   


    const submit = (user) => {
        if (!user.email || user.email === ""
            || !user.name || user.name === ""
            || !user.location
            || !user.password || user.password === ""
        ) {

            throw new Error("More than one fields are empty");
        }
        

        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then(() => {
                signInWithEmailAndPassword(auth, user.email, user.password)
                    .then(() => {
                        navigate("/createQueue")
                    });
            });

    }
    

    const onChange = (key, value) => {
        console.log(value)
        let tmp = {...user};
        tmp[key] = value;
        
    }
    return (
        
            
        <div className="container bg-light  mt-4 p-4">
            <div className= "row" >
                <div className="container card mt-4 p-4">
                    <div className="text-center">
                        
                        <h2>You have selected to GetInLine at: </h2>
                    </div>
                    <div className="card-body">
                    <div className="text-left">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder='John Doe' onChange={(e) => onChange("name", e.target.value)}></input>
                        </div>
                        
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                            onChange={(e) => onChange("email", e.target.value)}
                        />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPhoneNumber">Phone Number</label>
                            <input type="number" class="form-control" id="exampleInputPhoneNumber" placeholder="Phone Number"
                            onChange={(e) => onChange("phone", e.target.value)}
                            />
                        </div>
                        
                        <div class="col text-center">
                            <button type="submit" class="btn btn-secondary" onClick={() => navigate("/homepage")}>Back</button>
                            {'               '}
                            <button  class="btn btn-primary" onClick={() => navigate("/homepage")}>GetInLine</button>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
         
    )
}

export default UserAddInfo;