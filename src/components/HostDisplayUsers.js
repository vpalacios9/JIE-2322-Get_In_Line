import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { collection, query, onSnapshot, where, getDoc } from 'firebase/firestore';
import { app, database, auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const HostDisplayUsers = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [queueData, setQueueData] = useState([]);
  const [currentQueueName, setCurrentQueueName] = useState('');

  // Check if user is logged in and is a host
  useEffect(() => {
    const usersRef = collection(database, 'users');
    // Query the user collection to check if the current user is a host
    const userQuery = query(usersRef,where('host', '==', true));
    const unsubscribe = onSnapshot(userQuery, (snapshot) => {
      // If the user is not a host, redirect to the homepage
      if (snapshot.docs.length === 0) {
        alert("user not a host")
        navigate('/');
      }
    });

    // Unsubscribe from the userQuery when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [user, navigate]);

  useEffect(() => {
    const queueRef = collection(database, 'queue');
    const queueQuery = query(queueRef, where('host_id', '==', user.uid));
  
    const unsubscribe = onSnapshot(queueQuery, (snapshot) => {
      const queueData = [];
      snapshot.forEach(async (doc) => {
        const data = doc.data(); //Queue Data
        const usersNames= data.userNames;
        
        queueData.push({
          id: doc.id,
          users: usersNames,
          ...data
        });
      });

      alert(JSON.stringify(queueData)); // Check if queueData contains the information
      setQueueData(queueData);
    });
  
    return unsubscribe;
  }, [database, user.uid]);
  

  // Get the name of the current queue
  useEffect(() => {
    if (queueData.length > 0) {
      const currentQueue = queueData[0];
      setCurrentQueueName(currentQueue.name);
    }
  }, [queueData]);
      
  
    return (
      <div>
      <Navbar />
      <div className="container bg-light  mt-4 p-4">
        <div className="row">
          <div className="container card mt-4 p-4">
            <div className="text-center">
              <h2>{currentQueueName}</h2>
            </div>
            <div className="card-body">
              <div>
              {queueData.map((queue) => (
                  <div key={queue.id}>
                    <ul>

                        {queue.userNames.map((user) => (
                        <li key={user}>{user}</li>
                        ))}

                    </ul>
                    
                  </div>
                ))}


              </div>
              <button type="button" className="btn btn-secondary mr-5">
                Back
              </button>
              <button type="button" className="btn btn-primary mr-3">
                Add User
              </button>
              <button type="button" className="btn btn-danger mr-3">
                Remove User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};
  
export default HostDisplayUsers;
