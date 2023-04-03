import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { app, database, auth } from "../firebaseConfig";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const user = auth.currentUser;
  const isLoggedIn = user !== null;
  const navigate = useNavigate();
  const [isHost, setIsHost] = useState(false); // state to keep track if user is a host or not

  useEffect(() => {
    const checkIfUserIsHost = async () => {
      if (isLoggedIn) {
        const usersCollection = collection(database, "users");
        const usersSnapshot = await getDocs(usersCollection);
        usersSnapshot.forEach((doc) => {
          if (doc.data().userId === user.uid && doc.data().host === true) { // check if user is host
            setIsHost(true);
          }
        });
      }
    };
    checkIfUserIsHost();
  }, [isLoggedIn, user]);

  const handleMyQueuesClick = () => {
    if (isHost) {
      navigate("/HostDisplayUsers"); //TODO: TAKE THEM TO ALL QUEUES DISPLAY. RIGHT NOW IT TAKES THEM TO SINGLE QUEUE DISPLAY
    } // TODO: ADD ELSE STATEMENT FOR USERS TO TAKE THEM TO USERS QUEUES DISPLAY
  };

  const handleButtonClick = () => {
    if (isLoggedIn) {
      auth.signOut();
      navigate("/");
    } else {
        navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Get In Line</a>
      <div className="collapse navbar-collapse justify-content-end mr-5" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0">
          <ul className="navbar-nav mr-auto">
            {isLoggedIn && (
              <li className="nav-item active mr-5">
                <a className="nav-link" href="#" onClick={() => navigate("/MyQueues")}>My Queues <span className="sr-only">(current)</span></a>
              </li>
            )}
            <li className="nav-item mr-5">
              <button className="btn btn-outline-light my-2 my-sm-0" type="button" onClick={handleButtonClick}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
              </button>
            </li>
          </ul>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
