import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebaseConfig';

const LoginUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);

    const submit = (user) => {
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then(() => {
                navigate("/userSelectPage")
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }

    const onChange = (key, value) => {
        let tmp = {...user};
        tmp[key] = value;
        setUser({
            ...tmp
        })
    }
//In the inputs I added a more helpful way for users to see what email they should use
    return (
        <div className="container bg-light  mt-4 p-4">
            <div className= "row" >
                <div className="container card mt-4 p-4">
                    <div className="text-center">
                        <h4>Login as a User</h4>
                    </div>
                    <div className="text-left">
                        <div className="card-body">
                            <div className="form-group">
                                <label for="exampleFormControlInput1">email@email.com</label>
                            
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                    onChange={(e) => onChange("email", e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                                    onChange={(e) => onChange("password", e.target.value)}
                                />
                            </div>
                        </div>
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                        <div className="col text-center">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() => submit(user)}
                            >
                                Sign in
                            </button>
                            <br/>
                            <br/>
                            <button className="text-center, btn btn-secondary" onClick={() => navigate("/adminsignup")}>Create new Host</button>
                            &nbsp; &nbsp;
                            <button className="text-center, btn btn-secondary" onClick={() => navigate("/usersignup")}>Create new User</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginUser;
