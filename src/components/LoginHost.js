import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebaseConfig';

const LoginHost = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [error, setError] = useState(null); // add error state variable

    const submit = (user) => {
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then(() => {
                navigate("/hostDisplayUsers")
            })
            .catch(error => {
                setError(error.message); // update error message
            });
    }

    const onChange = (key, value) => {
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
                        <h4>Login as a Host</h4>
                    </div>
                    <div className="text-left">
                        <div className="card-body">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
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
                        <div class="col text-center">
                            <button
                                type="submit"
                                class="btn btn-primary"
                                onClick={() => submit(user)}
                            >
                                Sign in
                            </button>
                            <br/>
                            <br/>
                            <button class ="text-center, btn btn-secondary" onClick={() => navigate("/adminsignup")}>Create new Host</button>
                            &nbsp; &nbsp;
                            <button class="text-center, btn  btn-secondary" onClick={() => navigate("/usersignup")}>Create new User</button>
                            {error && <div className="text-danger mt-2">{error}</div>} {/* add error message */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginHost;
