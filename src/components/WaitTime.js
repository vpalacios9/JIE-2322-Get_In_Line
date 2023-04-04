import React, { useEffect, useState} from 'react'
import { auth, database } from '../firebaseConfig';
import { doc, getDoc, where, collection, query, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const WaitTime = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;
    const [userData, setUserData] = useState({});
    const [currentQueueID, setCurrentQueueID] = useState([]);
    const [userWaitSpot, setUserWaitSpot] = useState(0);
    const [currentQueueName, setCurrentQueueName] = useState('');
    const [currentQueueETW, setCurrentQueueETW] = useState(1);
    
 

    useEffect(() => {
        const q = query(collection(database, "users"));
        const result = getDocs(q).then((e) => {
            e.forEach((doc) => {
                if (doc.id === user.uid) {
                    setCurrentQueueID(doc.data().queues[doc.data().queues.length - 1]);
                }
            })
        })
        const q2 = query(collection(database, "queue"));
        const result2 = getDocs(q2).then((e) =>{
            e.forEach((doc) => {
                if (doc.id === currentQueueID) {

                    const curQueue = doc.data();

                    setCurrentQueueName(curQueue.name);
                    
                    //if the user.uid = the user in the "users" queue
                    for (let i = 0; i < curQueue.users.length; i++ ) {
                        if (curQueue.users[i] === user.uid) {
                            setUserWaitSpot(i+1);

                            setCurrentQueueETW(curQueue.etw * userWaitSpot);
                        }
                    }
                }
            })

        })
        
    }, [userWaitSpot, currentQueueName, user.uid, currentQueueID]);


    return (
        <div className="container bg-light  mt-4 p-4">
            <div className= "row" >
                <div className="container card mt-4 p-4">
                    <div className="text-center">
                        <h2>You are in line for {currentQueueName}!</h2>
                    </div>
                    <div className="card-body">
                    <div className="text-center">
                        <br></br>
                        <h5>Your position in queue is:</h5>
                        <br></br>

                        <h3>{userWaitSpot}</h3>

                        <br></br>
                        <h5>Estimated Wait Time is:</h5>
                        <br></br>
                        <h4>{currentQueueETW} minutes</h4>
                        <br></br>
                        <br></br>
                        <button class="btn btn-primary" onClick={() => navigate("/MyQueues")}>My Queues</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaitTime;