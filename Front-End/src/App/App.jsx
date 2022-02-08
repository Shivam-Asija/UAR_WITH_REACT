import "./App.css";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "../Routes/Routes"
import React, { useState } from "react";
import { UserNameModal } from "../Modules/LoginModal/UserNameModal"

function App() {
  const [userData, setUserData] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
      {/* {
        !loggedIn ? (
            <UserNameModal show={true} setLoggedIn={setLoggedIn} setUserData={setUserData}/>  
        ) : ""
      } */}
        <Header username={userData.username}/>
        <div className="main-content">
          <Switch>
            <Routes />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
