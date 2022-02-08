import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import logo from "../Shared/Images/SR_logo.svg";

function Footer() {
  return (
    <MDBFooter className="text-center text-lg-left  mt-4 footer">
      <div className="text-center p-3">
        <img id="logo-footer" className="brand-icon" src={logo} alt="Logo" />
        &emsp;&emsp;&emsp; &copy; {new Date().getFullYear()}
        <span className="text-light">
          &nbsp; Charter Communications. All rights reserved
        </span>
      </div>
    </MDBFooter>
  );
}

export default Footer;
