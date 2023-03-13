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
                
            </div>
        </div>
        </div>
    )
}

export default HomePage;