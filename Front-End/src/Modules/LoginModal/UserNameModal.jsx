import React, { useEffect } from 'react';
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { variables } from "../../Routes/Variables";
import $ from "jquery";

export const UserNameModal = ({show, setUserData, setLoggedIn}) => {

    const getUserData = () => {
        let user = $("#login-username").val();
        let pass = $("#login-password").val();
        setUserData({
            username: user,
            password: pass
        })
        fetch(variables.API_URL + "authentication",{
            method: "POST",
            body: JSON.stringify({
            domain: "B9S6QF2-E7470",
            userName: user,
            password: pass,
            }),
            headers:{
            Accept: "application/json",
            "content-Type": "application/json",
            "Access-Control-Allow-Creadentials": true
            }
        })
        .then((response) => response.json())
        .then((json) => {
                if (json === true) {
                console.log("User Logged in");
                $(".error-message").css("display","none");
                setLoggedIn(true);
            }else{
                $(".error-message").css("display","block");
            }
      })
    }

    return (
        <div className="userNameModal">
            <Modal
                show={show}
                size="lg"
                className='usernamePopupModal'
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Body  className='username-modal-body username-modal-body-responsive'>
                    <span className="error-message">Wrong Credentials</span>
                    <InputGroup className="mb-3 mt-3 source-username-input-box">
                        <FormControl 
                            placeholder='Enter Username ...'
                            id='login-username' 
                            className='username-input username-input-responsive'
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />                      
                    </InputGroup>
                    <InputGroup className="mb-3 mt-3 source-password-input-box">
                        <FormControl 
                            placeholder='Enter Password ...' 
                            id='login-password' 
                            className='password-input password-input-responsive'
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                      
                    </InputGroup>    
                    <Button 
                        className='username-submit-btn' 
                        onClick={()=>getUserData()} 
                        variant="primary" 
                        type="submit">
                        Submit
                    </Button>                                      

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" >Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}