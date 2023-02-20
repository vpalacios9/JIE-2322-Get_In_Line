import React, {useState, useEffect} from 'react';
import Navbar from "./Navbar";
import { collection, query, onSnapshot } from 'firebase/firestore';
import { app, database, auth } from "../firebaseConfig";
import { useNavigate } from 'react-router-dom';

const HostDisplayUsers = () => {
    // If User is Logged In
    const user = auth.currentUser;
    const navigate = useNavigate();
    const [queueData, setQueueData] = useState([]); 
    if (!user) navigate("/login");
   
    useEffect(() => {
        const q = query(collection(database, 'users'));
        const q1 = query(collection(database,'queue'));

        //Get Queue Name 
        const unsubscribe = onSnapshot(q1, (snapshot) => {
          const queueData = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            console.log(data);
            if (data.createdBy == user.uid) {
                queueData.push({ id: doc.id, ...doc.data() });
            }
          });
          setQueueData(queueData);
        });

        // Get Users for Queue
        const unsubscribe2 = onSnapshot(q,(snapshot) => {
            const queueInfoData = [];
            snapshot.forEach((doc) => {
            queueInfoData.push({ id: doc.id, ...doc.data() });
          });
          setQueueData(queueInfoData);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);
      
  
      return (
        <div>
            <Navbar />
            <div className="container bg-light  mt-4 p-4">
            <div className= "row" >
                <div className="container card mt-4 p-4">
                    <div className="text-center">
                        <h2>Super Cuts</h2>
                    </div>
                      <div class="card-body">
                      <div>
                          {queueData.map((data) => (
                          <div key={data.id}>
                          <p>{data.name}</p>
                          {/* display data */}
                          </div>
                          ))}
                      </div>
                      <button type="button" class="btn btn-secondary mr-5">Back</button>
                      <button type="button" class="btn btn-primary mr-3">Add User</button>
                      <button type="button" class="btn btn-danger mr-3">Remove User</button>
                      </div>
                </div>
            </div>
            </div>

        
        </div>
      );
    };
  
  export default HostDisplayUsers;