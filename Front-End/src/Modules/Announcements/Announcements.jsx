import React, { useState } from "react";
import Uarlogo from "../../Shared/Images/UARlogo.svg";
import "./AnnouncementsComponent.css";

function Announcements() {
  const [name, setName] = useState("Shivam");
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 announcements-outer-div">
          <h3 className="pl-4 mt-3">
            <br />
          </h3>
          <div className="py-1">
            <div className="container">
              <div className="row">
                <div className="col">
                  <img
                    className="img-fluid d-block"
                    src={Uarlogo}
                    width="400"
                    alt=""
                  />
                </div>
              </div>
              <div className="row announcement-section-bar">
                <div className="col-md-6 border mt-2 color-blue"></div>
                <div className="col-md-6 mt-2 py-3 color-grey"></div>
              </div>
              <div className="row bg-light">
                <div className="col m-2 align-left">
                  <div className="row">
                    <div className="col-md ">
                      <h2 className="mt-2 font-bold color-navy">
                        Announcements
                      </h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md">
                      <hr />
                      <h4 className="font-large color-navy">Eclipse Test</h4>
                      <p className="mb-0">If you can see this, thanks</p>
                      <p className="font-italic font-12px">
                        Created By Orekoya, Midey - 7/8/2020 12:21:46 PM
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md">
                      <hr />
                      <h4 className="color-navy">Eclipse UAR Test</h4>
                      <p className="mb-0">Trying out another</p>
                      <p className="font-italic font-12px">
                        Created By Orekoya, Midey - 10/22/2019 2:37:44 PM
                      </p>
                    </div>
                  </div>
                  <div className="row  mt-4 mb-4">
                    <div className="col-md">
                      <div className="p-1">
                        <div className="col">
                          <div className="pagination-container">
                            <ul className="pagination">
                              <li className="active">
                                <a>1</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
