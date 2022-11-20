import React, {useState} from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { app, database } from "../firebaseConfig";

const HostCreateQueue = () => {
  const [queueData, setQueueData] = useState({});
  const collectionRef = collection(database, 'queue');
  const handleCreateQueue = (data) => {
    addDoc(collectionRef, data)
    .then(() =>  {
      alert('Data added');
    })
    .catch((err) => {
      alert(err.message);
    })
  }

    return (
        <div className="container bg-light  mt-4 p-4">
            <div className= "row" >
                <div className="container card mt-4 p-4">
                    <div className="text-center">
                        <h2>Create New Queue</h2>
                    </div>
                    <div className="card-body">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={(e) => setQueueData({...queueData, name: e.target.value})}
                            />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Select Location</span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={(e) => setQueueData({...queueData, loc: e.target.value})}
                            />
                            </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Estimated Waiting Time per Person</span>
                            </div>
                            <input
                                type="number"
                                class="form-control"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={(e) => setQueueData({...queueData, etw: parseInt(e.target.value)})}
                            />
                        </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div  class="text-center">
                                    <button disabled={!(queueData.name && queueData.loc && queueData.etw)} type="submit" class="btn btn-primary mr-5" onClick={() => handleCreateQueue(queueData)}>Create Queue</button>
                                    <button type="submit" class="btn btn-danger mr-5">Delete Queue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostCreateQueue;