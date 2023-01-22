import { Component } from "react";
import {Button, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap/lib/Tab";

export default class HomePage extends Component {
    render() {
        return (
            <div className="container bg-white mt-4 p-4">
                <div className="row">
                    <div className="container card mt-4" >
                            <img class = "img-responsive" src= "https://www.incimages.com/uploaded_files/image/1920x1080/getty_177129252_49311.jpg"></img>
                            <h1 class="carousel-caption d-flex justify-content-center">Welcome to GetInLine </h1>
                    </div>
                    <div className="text-left"></div>
                    
                </div>
                <div className="row px-4 my-4">


                            
                            <h4>GetInLine Inc. is a queue managament and alert system that calls you to scan a QR code at your doctors office, sign in and go 
                            do what you would like with your time until your time is up. </h4>
                            <div className="row my-3 text-left">
                                <div className="col sm = {99}">
                                <button class = "btn-primary  btn-lg">Member</button>
                                    </div>
                                    <div className="col sm = {80}">
                                    <button class = "btn-primary btn-blocj text-center btn-lg">Host</button>
                                    </div>

                                
                                </div>
                            
                            
                    </div>



            </div>
        )

    }
}