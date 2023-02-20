import { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect} from 'react'
import { auth, database } from '../firebaseConfig';

import { setDoc, doc , collection, query, onSnapshot} from '@firebase/firestore';
const UserAddInfo  = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        services: []

    });
    const navigate = useNavigate();
    
    if (!auth.currentUser) navigate("/login");

    const [error, setError] = useState(null);
    const [queueData, setQueueData] = useState([]); 


    const addUser = (user, uid) => {
        setDoc(
            doc(database, "users", uid), {
        "name": user.name,
        "email": user.email,
        "phone": user.phone,
        "services": queueData
    })
        .then(() => {
            console.log("User added to Firestore");
        });
    }

    const onSubmit = async (event) => {
  event.preventDefault();

  if (
    !user.email ||
    user.email === "" ||
    !user.name ||
    user.name === "" ||
    !user.phone ||
    user.phone === ""
  ) {
    setError("One or more fields isn't completed");
    return;
  }
  if (user.phone.toString().length !== 10) {
    setError("Phone number can only be 10 digits long");
    return;
  }

  const updatedUser = { ...user };
  updatedUser.services.push(queueData);
  setUser(updatedUser);
  await addUser(updatedUser, auth.currentUser.uid); 
  navigate("/createQueue");
};

    const onChange = (key, value) => {
        const updatedUser = { ...user };
        updatedUser[key] = value;
        setUser(updatedUser);
    }
    useEffect(() => {
        const q1 = query(collection(database, 'queue'));
      
        const unsubscribe = onSnapshot(q1, (snapshot) => {
          const queueData = snapshot.docs.map(doc => doc.id);
          setQueueData(queueData);
        });
      
        return () => {
          unsubscribe();
        };
      }, []);
      
    

    return (
        
            
        <div className="container bg-light  mt-4 p-4">
            <div className= "row" >
                <div className="container card mt-4 p-4">
                    <div className="text-center">
                        
                        <h2>You have selected to GetInLine at: </h2>
                    </div>
                    <div className="card-body">
                    <form onSubmit={onSubmit}>
                            <div className="text-left">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Name</label>
                                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder='John Doe' onChange={(e) => onChange("name", e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => onChange("email", e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPhoneNumber">Phone Number</label>
                                    <input type="number" className="form-control" id="exampleInputPhoneNumber" placeholder="Phone Number" onChange={(e) => onChange("phone", e.target.value)} />
                                </div>
                                <div className="col text-center">
                                    <button  className="btn btn-secondary" onClick={() => navigate("/homepage")}>Back</button>
                                    {'               '}
                                    <button className="btn btn-primary" type="submit">GetInLine</button>
                                </div>
                                {error && <p className="text-danger">{error}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
         
    )
}

export default UserAddInfo;