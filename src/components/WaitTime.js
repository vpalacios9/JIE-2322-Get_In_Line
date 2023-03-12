import React, { useEffect, useState} from 'react'
import { auth, database } from '../firebaseConfig';
import { collection, query } from 'firebase/firestore';

const WaitTime = () => {
    const user = auth.currentUser.id;
    const [currentQueue, setCurrentQueue] = useState('');
    const [queueData, setQueueData] = useState([]);

    //get current queue
    useEffect(() => {
        if (queueData.length > 0) {
            const currentQueue = queueData[0];
            setCurrentQueue(currentQueue.name);
        }
    }, [queueData])

    
    useEffect(() => {
        const queueRef = collection(database, 'queue');
        //const userQuery = query(current)

    })

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
                        <h5>Put position</h5>
                        <br></br>
                        <h5>Estimated Wait Time is:</h5>
                        <br></br>
                        <h5>Put ETA</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaitTime;