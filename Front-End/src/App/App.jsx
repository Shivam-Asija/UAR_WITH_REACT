import "./App.css";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "../Routes/Routes";
import React, { useEffect, useState } from "react";
import { variables } from "../Routes/Variables";
import { BottomNavigation } from "@mui/material";
import TableComponent from "../MaterialUI/Components/table";
import selectBox from "../MaterialUI/Components/selectBox";
import Button from "@material-ui/core/Button";
// import { UserNameModal } from "../Modules/LoginModal/UserNameModal"

function App() {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);

  // fetch(variables.API_URL + "loginUsername")
  //   .then((response) => response.text())
  //   .then((json) => setUsername(json))
  //   .then(console.log("username : ", username));

  // useEffect(() => {
  //   fetch(variables.API_URL + "authentication/user")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json))
  // },[loggedIn]);

  return (
    <Router>
      {loggedIn ? (
        <div className="App">
          <Header username={username} />
          <div className="main-content">
            <Switch>
              <Routes />
            </Switch>
          </div>
          <Footer />
        </div>
      ) : (
        ""
      )}
    </Router>
  );
}

/* {
        !loggedIn ? (
            <UserNameModal show={true} setLoggedIn={setLoggedIn} setUserData={setUserData}/>  
        ) : ""
      } */

export default App;
