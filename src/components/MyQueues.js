import { Component } from "react";
import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap/lib/Tab";
import Navbar from "./Navbar";
import { auth, database } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import {collection,query,onSnapshot,where,getDoc, doc,} from "firebase/firestore";

const MyQueues = () => {
  const [queues, setQueues] = useState([]);
  const navigate = useNavigate();
  const currentUser = auth.currentUser;


  useEffect(() => {
    if (currentUser) {
      const userDocRef = doc(database, "users", currentUser.uid);
  
      const unsubscribe = onSnapshot(userDocRef, async (userDoc) => {
       
          const data = userDoc.data();
          const userQueues = data.queues;
  
          console.log('User Queues:', userQueues);
  
          
            const queuesData = [];
  
            for (const queueId of userQueues) {
              const queueDoc = await getDoc(doc(database, "queue", queueId));
              queuesData.push({ id: queueId, name: queueDoc.data().name });
            }
  
            
  
            setQueues(queuesData);
           
         
      });
  
      return () => {
        unsubscribe();
      };
    } 
  }, [currentUser]);
  
  
 
  if (!currentUser) {
    alert("user not logged in")
    navigate('/');
  }

  return (
    <div>
      <Navbar />
      <div className="container bg-light mt-4 p-4">
        <div className="row">
          <div className="container card mt-4 p-4">
            <div className="text-center">
              <h2>My Queues</h2>
            </div>
            <div className="card-body">
              <div>
                {queues.map((queue) => (
                  <div key={queue.id} className="mb-2"> {}
                    <Button
                       
                      className="btn btn-primary mr-3 w-100" 
                      
                    >
                      {queue.name}
                    </Button>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <br />
              <button type="button" className="btn btn-danger mr-3">
                Add New Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MyQueues;
