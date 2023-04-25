import { Component } from "react";
import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap/lib/Tab";
import Navbar from "./Navbar";
import { auth, database } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import {collection,query,onSnapshot,where,getDoc, doc,} from "firebase/firestore"; //imports firebase functions 
const MyQueues = () => {
  const [queues, setQueues] = useState([]); //defines the queues state variable with setQueues to use the useState hook 
  const navigate = useNavigate();
  const currentUser = auth.currentUser; //makes sure that the current user logged in is authenitcated 
  useEffect(() => {
    if (currentUser) { //checks to see if user is authenciated, and then it will execute the code 
      const userDocRef = doc(database, "users", currentUser.uid); //creates a reference tothe firebase document in the database. takes in the database and the users collection as an argument.
      const unsubscribe = onSnapshot(userDocRef, async (userDoc) => {    //listener to see real time updates that may happen on Firestore 
          const data = userDoc.data(); //gets data from the userdoc document and stores it in data 
          const userQueues = data.queues; //gets the queues field from data and sets it equal to the userQueues variable 
          console.log('User Queues:', userQueues); //logs userQueues value 
            const queuesData = []; //initializes array to store queue data 
            for (const queueId of userQueues) { //iteratres through queueId  in the userQueues array 
              const queueDoc = await getDoc(doc(database, "queue", queueId));  //gets the queueId document 
              queuesData.push({ id: queueId, name: queueDoc.data().name }); //pushes retrieved data to array
            }
            setQueues(queuesData);
      });
      return () => {
        unsubscribe();
      };
    } 
  }, [currentUser]); 
  if (!currentUser) { // if current user is not logged in, then it will exexute this statement 
    alert("user not logged in") //will make an alert saying user is not logged in
    navigate('/'); /// navigates back to homepage 
  }
  const handleClick = () => { //constant to store an action a user might do 
    navigate('/WaitTime'); //navigates back to the wait time page 
  };
  return ( //html code to display contents 
    <div>
      <Navbar />   {/**Navbar component to display at the top of the page */}
      <div className="container bg-light mt-4 p-4"> {/**Creates a container wiht a light background */}
        <div className="row"> {/**Row class to help with grid layout */}
          <div className="container card mt-4 p-4"> {/**Create a card container with padding */}
            <div className="text-center"> {/**Centers text content that is inside it*/}
              <h2>My Queues</h2> {/**Writes My Queues at top of page */}
            </div> {/**Closes text center*/}
            <div className="card-body"> {/**creates card body */}
              <div>
                {queues.map((queue) => ( 
                  <div key={queue.id} className="mb-2"> {}
                    <Button
                      className="btn btn-primary mr-3 w-100"
                      onClick={handleClick}
                    >
                      {queue.name}
                    </Button >
                  </div>
                ))} {/**maps through queues array and then makes a new div element for the qeueus with queue.id as a key.  Creates a button 
                 * with theh same functionality as listed in react 
                */}
              </div>
              <br />
              <br />
              <br />
              <button type="button" className="btn btn-danger mr-3" onClick={() => navigate("/UserSelectPage")} >
                Add New Event
              </button> {/**Creates a new button that is red and goes back to user select page */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MyQueues;
