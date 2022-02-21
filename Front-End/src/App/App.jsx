import "./App.css";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "../Routes/Routes";
import React, { useState } from "react";
import { variables } from "../Routes/Variables";
// import { UserNameModal } from "../Modules/LoginModal/UserNameModal"
// import { useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);

  fetch(variables.API_URL + "loginUsername")
    .then((response) => response.text())
    .then((json) => setUsername(json))
    .then(console.log("username : ", username));

  return (
    <Router>
      <div className="App">
        {/* {
        !loggedIn ? (
            <UserNameModal show={true} setLoggedIn={setLoggedIn} setUserData={setUserData}/>  
        ) : ""
      } */}
        <Header username={username} />
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
