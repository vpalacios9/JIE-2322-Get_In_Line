import { Component } from 'react';

export default class AdminSignUp extends Component {
    render() {
        return (
            <div className="container bg-light  mt-4 p-4">
            <div className= "row" >
                <div className="container card mt-4 p-4">
                    <div className="text-center">
                        <h2>Sign up to Become a Host</h2>
                    </div>
                    <div className="card-body">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="name" class="form-control" id="exampleFormControlInput1"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Select Location</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                            <option>Chicago</option>
                            <option>Dallas</option>
                            <option>Houston</option>
                            <option>Los Angeles</option>
                            <option>New York</option>
                            <option>Philadelphia</option>
                            <option>San Antonio</option>
                            </select>
                        </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                     </div>
                     <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">I agree and read Terms and Conditions</label>
                    </div>
                    <div class="col text-center">
                        <button type="submit" class="btn btn-primary">Create Account</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}