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

        const unsubscribe = onSnapshot(q, (snapshot) => {
          const queueData = [];
          snapshot.forEach((doc) => {
            queueData.push({ id: doc.id, ...doc.data() });
          });
          setQueueData(queueData);
        });

        const unsubscribe2 = onSnapshot(q1,(snapshot) => {
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
                        <h2>Temp Hold</h2>
                    </div>
                </div>
            </div>
            </div>

        <div>
          {queueData.map((data) => (
            <div key={data.id}>
                <p>{data.name}</p>
              {/* display data */}
            </div>
          ))}
        </div>
        </div>
      );
    };
  
  export default HostDisplayUsers;