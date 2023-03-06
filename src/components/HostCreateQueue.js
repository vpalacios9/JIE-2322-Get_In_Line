import React, {useState} from 'react';
import Navbar from "./Navbar";
import { collection, addDoc } from 'firebase/firestore';
import { app, database, auth } from "../firebaseConfig";
import { useNavigate } from 'react-router-dom';

const HostCreateQueue = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  if (!user) navigate("/login");
  const [queueData, setQueueData] = useState({
    users: [],
    host_id: user.uid
  });
  const collectionRef = collection(database, 'queue');
  
  const handleCreateQueue = (data) => {  
    addDoc(collectionRef, data)
    .then(() =>  {
      alert('Data added');
    })
    .catch((err) => {
      alert(err.message);
    })
    navigate("/HostDisplayUsers"); //TODO: TAKE THEM TO MY QUEUES. RIGHT NOW IT TAKES THEM TO THE ONE QUEUE DISPLAY
  }

    return (
        <div>
            <Navbar />
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
                                <span class="input-group-text" id="inputGroup-sizing-default">State</span>
                            </div>
                            <select
                                type="text"
                                class="form-control"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={(e) => setQueueData({...queueData, state: e.target.value})}
                            >
                                    <option value={null} selected disabled hidden>Select an Option</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">City</span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={(e) => setQueueData({...queueData, city: e.target.value})}
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
                                    <button disabled={!(queueData.name && queueData.state && queueData.city && queueData.etw)} type="submit" class="btn btn-primary mr-5" onClick={() => handleCreateQueue(queueData)}>Create Queue</button>
                                </div>
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