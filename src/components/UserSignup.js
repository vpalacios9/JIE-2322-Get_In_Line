import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth, database } from '../firebaseConfig';
import { setDoc, doc } from '@firebase/firestore';


const UserSignUp = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [agreed, setAgreed] = useState(false);


    const createUser = (user, uid) => {
        setDoc(
            doc(database, 'users', uid),
            {
                "email": user.email,
                "name": user.name,
                "location": user.location,
                "host": false,
                "queues": []
    
            }
        )
    }
    
    const submit = (user) => {
        if (!user.email || user.email === ""
            || !user.name || user.name === ""
            || !user.location
            || !user.password || user.password === ""
        ) {

            throw new Error("More than one fields are empty");
        }
        if (!agreed) {
            throw new Error("Please read and agree with Terms and Condition to continue creating your account")
        }
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                createUser(user, userCredential.user.uid);
                navigate("/userSelectPage");
            });
    }
    //TODO: add more clear labels for users 

    const onChange = (key, value) => {
        console.log(value)
        let tmp = {...user};
        tmp[key] = value;
        setUser({
            ...tmp
        })
    }
    
    return (
        <div className="container bg-light  mt-4 p-4">
            <div className= "row" >
                <div className="container card mt-4 p-4">
                    <div className="text-center">
                        <h4>Sign up to Become a Member</h4>
                    </div>
                    <div className="card-body">
                        <div className="text-left">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Enter Name</label>
                                
                                <input type="name" class="form-control" id="exampleFormControlInput1" onChange={(e) => onChange("name", e.target.value)} />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Select Location</label>
                                <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => onChange("location", e.target.value)}>
                                    <option value={null} selected disabled hidden>Select an Option</option>
                                    <option value="Chicago">Chicago</option>
                                    <option value="Dallas">Dallas</option>
                                    <option value="Houston">Houston</option>
                                    <option value="Los Angeles">Los Angeles</option>
                                    <option value="New York">New York</option>
                                    <option value="Philadelphia">Philadelphia</option>
                                    <option value="San Antonio">San Antonio</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                                onChange={(e) => onChange("email", e.target.value)}
                            />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                                onChange={(e) => onChange("password", e.target.value)}
                            />
                            </div>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"
                            onChange={(e) => {
                                setAgreed(e.target.checked);
                            }}
                            />
                            <label class="form-check-label" for="exampleCheck1">I agree and read Terms and Conditions</label>
                        </div>
                        <div class="col text-center">
                            <button type="submit" class="btn btn-primary" onClick={() => submit(user)}>Create Account</button>
                            <br/>
                            <br/>
                            <button  class="btn btn-secondary" onClick={() => navigate("/LoginUser")}>User Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSignUp;