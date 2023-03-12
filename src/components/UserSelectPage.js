import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, database } from '../firebaseConfig';
import { collection, getDocs, doc, updateDoc, query, arrayUnion } from '@firebase/firestore';
import Navbar from './Navbar';

const UserSelectPage = () => {
    
  const [queueData, setQueueData] = useState({
      id: "",
      state: "",
      city: ""
    });
    const [allQueues, setAllQueues] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      // Check if user is logged in and not a host
      if (!auth.currentUser || auth.currentUser.host) {
        navigate('/createQueue'); // Redirect to login if not logged in or is a host
        return;
      }
      const q = query(collection(database, "queue"));
      getDocs(q).then(docs => {
        const queues = []
        let queue;
        docs.forEach((doc) => {
          queue = {...doc.data(), id: doc.id}
          queues.push(queue);
        });
        setAllQueues([...queues]);
      });
    }, []);

    const addQueue = async (id) => {
      if (id === undefined || id === null || id === "") {
        throw new Error("ID is not defined");
      }

      // Update the queue document with the user ID
      const queueDocRef = doc(database, "queue", id);
      await updateDoc(queueDocRef, {
        users: arrayUnion(auth.currentUser.uid)
      });
    
      // Update the user document with the queue ID
      const userDocRef = doc(database, "users", auth.currentUser.uid);
      await updateDoc(userDocRef, {
        queues: arrayUnion(id)
      });
    
      navigate("/WaitTime");
    }

    return (
        <div>
          <Navbar />
        <div className="container bg-light  mt-4 p-4">
            <div className= "row" >
                <div className="container card mt-4 p-4">
                    <div className="text-center">
                        <h4>Select an event</h4>
                    </div>
                    <div className="card-body">
                        <div className="text-left">
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">State</label>
                                <select
                                  class="form-control"
                                  id="exampleFormControlSelect1"
                                  onChange={(e) => {
                                    setQueueData({...queueData, state: e.target.value})
                                  }}
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

                            <div class="form-group">
                                <label for="exampleFormControlSelect1">City</label>
                                <input
                                  class="form-control"
                                  id="exampleFormControlSelect2"
                                  onChange={(e) => {
                                    setQueueData({...queueData, city: e.target.value})
                                  }}
                                />
                            </div>

                            <div class="form-group">
                              <label for="exampleFormControlSelect1">Event</label>
                              <select
                                class="form-control"
                                id="exampleFormControlSelect3"
                                onChange={(e) => {
                                  setQueueData({...queueData, id: e.target.value})
                                }}
                              >
                                <option value={null} selected disabled hidden>Select an Option</option>
                                {
                                  (queueData.state !== null && queueData.state !== "" && queueData.city !== null && queueData.city !== "") ? (
                                    allQueues.filter(queue => queue.state === queueData.state && queue.city.includes(queueData.city)).map((queue) => (
                                      <option value={queue.id}>{queue.name}</option>
                                    ))
                                  ) : (queueData.state !== null && queueData.state !== "") ? (
                                    allQueues.filter(queue => queue.state === queueData.state).map((queue) => (
                                      <option value={queue.id}>{queue.name}</option>
                                    ))
                                  ) : (queueData.city !== null && queueData.city !== "") ? (
                                    allQueues.filter(queue => queue.city.includes(queueData.city)).map((queue) => (
                                      <option value={queue.id}>{queue.name}</option>
                                    ))
                                  ) : (
                                    allQueues.map((queue) => (
                                      <option value={queue.id}>{queue.name}</option>
                                    ))
                                  )
                                }
                              </select>
                            </div>
                            <div class="col text-center">
                              <button type="submit" class="btn btn-primary" onClick={() => addQueue(queueData.id)}>GetInLine</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default UserSelectPage;