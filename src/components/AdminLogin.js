import { Component } from 'react';

export default class AdminLogin extends Component {
    render() {
        return (
            <div className="container bg-light  mt-4 p-4">
            <div className= "row" >
                <div className="container card mt-4 p-4">
                    <div className="text-center">
                        <h2>Admin Sign in</h2>
                    </div>
                    <div className="text-left">
                    <div className="card-body">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                     </div>
                     </div>
                    <div class="col text-center">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}