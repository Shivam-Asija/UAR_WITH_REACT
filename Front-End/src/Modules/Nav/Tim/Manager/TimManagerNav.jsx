import React from "react";
import TimUarLogo from "../../../../Shared/Images/TIMUARLOGO.svg";
import { NavLink } from "react-router-dom";

function TimManagerNav(props) {
  return (
    <div className="tim-manager-navbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 bg-light">
            <img
              className="img-fluid d-block mt-1 pl-3 pt-4 pb-3"
              src={TimUarLogo}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="px-0 py-0 border-light shadow">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 px-0 py-0">
                <div className="tim-management-portal col-md-12 py-1 pt-2 pb-1 border-left border-bottom border-right border-light">
                  <div className="col-md-12 mt-2 mb-3">
                    <h4 className="text-left text-white pl-3">
                      TIM MANAGEMENT PORTAL
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-0 pl-2">
                <div className="row">
                  <div className=" col-md-4 p-0  border-bottom border-top">
                    <NavLink
                      id="timManagerPending"
                      className="tim-manager-nav btn rounded-0 text-center border-right w-100 m-0 py-3 text-muted btn-lg "
                      to="TimManagerPending"
                    >
                      PENDING
                    </NavLink>
                  </div>
                  <div className=" col-md-4 p-0 p-0 pl-2">
                    <NavLink
                      id="TimManagerRequests"
                      className="tim-manager-nav btn rounded-0 text-center border-right w-100 m-0 py-3 text-muted btn-lg "
                      to="TimManagerRequests"
                    >
                      REQUEST
                    </NavLink>
                  </div>
                  <div className=" col-md-4 p-0 p-0 pl-2">
                    <NavLink
                      id="tim-manager-pending"
                      className="tim-manager-nav btn rounded-0 text-center border-right w-100 m-0 py-3 text-muted btn-lg "
                      to="TimManagerApproved"
                    >
                      APPROVED
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-0 py-0 border-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-0 py-0">
              <div className="col-md-12 border-left my-2   border-right pt-2 pb-1 bg-success border-light">
                <h4 className="text-left text-white pl-3 pt-1 pb-1">
                  {props.heading}
                </h4>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimManagerNav;
