import React, { Component } from 'react'
import { auth, database } from '../firebaseConfig'
import 'firebase/auth'


// Main function to check to register for class

export default class UserSignUp extends Component {
    render() {
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
                        <input type="text" class="form-control" id="email" placeholder="name@example.com"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                     </div>
                     </div> 
                     <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">I agree and read Terms and Conditions</label>
                    </div>
                    <div class="col text-center">
                                <button onClick={() => register()} type="submit" class="btn btn-primary">Create Account</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
function register() {
    var email = document.getElementById("email").value;
    var password = document.getElementById('password').value;
    var user_name = document.getElementById('name').value;
    var user_location = document.getElementById('location').value;

    console.log(email);
    console.log(password);
    console.log(user_name);
    console.log(user_location);

    //Check email and password
    if (validate_email === false || validate_password(password) === false) {
        alert('email or password is invalid.')
        return
    }
    if (check_location === false || check_field === false) {
        alert('field is not correct');
        return
    }
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            var user = auth.currentUser
            var database_ref = database.ref()

            var user_data = {
                email: email,
                user_name: user_name,
                user_location: user_location,
            }
            database_ref.child('.users/' + user.uid).set(user_data)
        })
        .catch(function (error) {
            var error_code = error.code
            var error_message = error.error_message
            alert(error_message)
        })

}

// Check to see if they put in a valid email account in
//@email the email the user put in to create an account with.
function validate_email(email) {
    var is_email = /^[^@]+@\w+(\.\w+)+\w$/;
    if (is_email.test(email))
        return true;
    return false;
}
//Checks to see if the user password is strong.
//@password The password the user is trying to set.
function validate_password(password) {
    var lower_case = /[a-z]/g
    var upper_case = /[A-Z]/g

    if (password < 8)
        return false
    return true
}
//Check to see if the field has anything in it
//@field The field we are trying to check. 
function check_field(field) {
    if (field === null || field.length < 1)
        return false
    return true
}
//Check user location
//@location location being checked
function check_location(location) {
    if (location === null)
        return false
    return true
}