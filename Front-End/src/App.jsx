import "./App/App.css";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./App/Routes";
import React, { useState, useEffect } from "react";
import { variables } from "./Routes/Variables";
import { UserNameModal } from "./App/UserNameModal";

function App() {
  const [userData, setUserData] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);
  const [modalShow, setModalShow] = useState(true);

  console.log(userData.username);

  return (
    <Router>
      <div className="App">
      {
        !loggedIn ?  (
            <UserNameModal show={true} setLoggedIn={setLoggedIn} setUserData={setUserData}/>  
        ) : ""
      }
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
