import { Component } from 'react';
import { useNavigate, useSubmit } from 'react-router-dom';
import React, { useState} from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { auth, database } from '../firebaseConfig';
import ReactLoading from 'react-loading';
import { setDoc, doc } from '@firebase/firestore';
const UserAddInfo  = () => {
    const user = auth.currentUser;
    const navigate = useNavigate();
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState("");
    if (!user) navigate("/login");


   


    const submit = (user) => {
        
        if(user === null){
            setError("More than one fields are empty");
            return;
        }

        if (!user.email || user.email === ""
            || !user.name || user.name === ""
            || !user.phone || user.phone === "" 
        ) {

            setError("More than one fields are empty");

        }
        console.log(loading);
        setLoading(true);
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
        <div>
            {!loading ? (
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
                            <button  class="btn btn-primary" onClick={() => submit(user)}>GetInLine</button>
                        </div>
                        <p>{error}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            ):(
                <ReactLoading type="spin" color="#000" width={40} />
            )
    }
         </div>
    )
}

export default UserAddInfo;