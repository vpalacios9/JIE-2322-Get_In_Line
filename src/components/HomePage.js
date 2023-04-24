import { Component } from "react";
import {Button,  Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap/lib/Tab";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
        <div className="container bg-light  mt-2 p-2">

            <div className="row">
                <div className="container card mt-4 p-4">
                <h1>Welcome to GetInLine</h1>
                
                    <img class = "mr-1" src="https://miro.medium.com/max/1200/1*v5pZW_TaxU-84hn2vfSySg.jpeg"></img>
                    
                    <div className="card-body">
                    <h4>GetInLine Inc. is a queue managament and alert system that calls you to scan a QR code at your doctors office, sign in and go 
                        do what you would like with your time until your time is up. </h4>
                        <div className="container">
                            <div class = "row">
                                <div class = "card-body">                                
                                    <div class="col-12">
                                    <div  class="text-center">
                                        <button class="btn  btn-primary mr-5" onClick={() => navigate("/loginHost")}>Login as a Host</button>
                                        <button class="btn  btn-primary mr-5" onClick={() => navigate("/loginUser")}>Login as a User</button>
                                        <br/>
                                        <br/>
                                        <button class ="btn btn-secondary mr-5" onClick={() => navigate("/adminsignup")}>Host Signup</button>
                                        <button class="btn  btn-secondary mr-5" onClick={() => navigate("/usersignup")}>User Signup</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HomePage;