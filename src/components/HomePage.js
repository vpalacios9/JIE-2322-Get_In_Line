import { Component } from "react";
import {Button,  Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap/lib/Tab";

export default class HomePage extends Component {
    render() {
        return (
            <div className="container mt-4 p-4">
                
      <Container>
        <Row>
          
            <img src={"https://www.incimages.com/uploaded_files/image/1920x1080/getty_177129252_49311.jpg"} alt="Image" style={{ width: '100%' }} />
            <h1 className="text-center" style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)',  fontSize:100, color:"white"}}>Welcome to GetInLine</h1>
            <h4 className="text-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',  fontSize:60, color:"white"}}>Eliminate Lines, Optimize Your Time</h4>
            
          
        </Row>
      </Container>
 
                <div className="row px-4 my-4">     
                            <h4>GetInLine Inc. is a queue managament and alert system that calls you to scan a QR code at your doctors office, sign in and go 
                            do what you would like with your time until your time is up. </h4>
                                 
                    </div>
                    <div className="container">
                    <div className="row my-3 text-left">
                                <div className="col-lg-199">
                                <button class = "btn-primary  btn-lg" style={{marginRight: '525px', width: 200}}>Member</button>
                                    </div>
                                    <div className="col-lg-4">
                                    <button class = "btn-primary text-center btn-lg" style={{width: 200}}>Host</button>
                                    </div>         
                                </div>  

                    </div>
            </div>
            
        )

    }
}