import React, { useEffect, useState} from 'react'
import { auth, database } from '../firebaseConfig';
import { doc, getDoc, where, collection, query } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';

const WaitTime = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;
    const [userData, setUserData] = useState({});
    const [userQueueList, setUserQueuesList] = useState([]);
    const [queueData, setQueueData] = useState({});

    // useEffect(() => {
    //     const q = query(collection(database, "users"));
    //     //const docRef = doc(database, "users", user.uid);
    //     q.getDoc().then((doc) => {
    //         if (doc.exists) {
    //             setUserData(doc.data())
    //             setUserQueuesList(doc.data().queues);
    //         } else {
    //             throw new Error ("no user");
    //         }
    //     })
    // }, [user]);


    //get current queue
    // useEffect(() => {
    //     //get user queue
    //     const getUser = async () => {
    //         const userDocRef = await doc(database, "users", user.uid);
    //         setUserData(userDocRef.data());
    //     }
    //     getUser()
        
    //     setCurrentQueue(userData.queues[userData.queues.length - 1]);
    //     const queueDocRef = doc(database, "queue", currentQueue);
    //     setQueueData(queueDocRef.users)
        
    //     //have to wait for data to be retrieved
        
    // });

    return (
        <div className="container bg-light  mt-4 p-4">
            <div className= "row" >
                <div className="container card mt-4 p-4">
                    <div className="text-center">
                        <h2>You are now in line!</h2>
                    </div>
                    <div className="card-body">
                    <div className="text-center">
                        <br></br>
                        <h5>Your position in queue is:</h5>
                        <br></br>

                        <p>{userQueueList}</p>

                        <br></br>
                        <h5>Estimated Wait Time is:</h5>
                        <br></br>
                        <h5>Put ETA</h5>
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