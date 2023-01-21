import { Component } from "react";

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


                            <div className="container card mt-4" >
                            <h4>GetInLine Inc. is a queue managament and alert system that calls you to scan a QR code at your doctors office, sign in and go 
                            do what you would like with your time until your time is up. </h4>
                            <div class = "text-left">
                                <div class = "card-body">
                                    <button class = "btn-primary rounded-pill">Member</button>
                                    <button class = "btn-primary rounded-pill text-center">Host</button>

                                </div>
                            </div>
                            
                    </div>



            </div>
        )

    }
}