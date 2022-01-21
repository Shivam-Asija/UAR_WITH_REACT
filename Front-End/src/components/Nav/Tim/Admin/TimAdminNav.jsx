import React from "react";
import TimUarLogo from "../../../../TIMUARLOGO.svg";
import { NavLink } from "react-router-dom";

function TimAdminNav(props) {
  return (
    <div className="tim-admin-navbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 bg-light">
            <img
              className="img-fluid d-block mt-1 pl-3 pt-4 pb-3"
              src={TimUarLogo}
            />
          </div>
        </div>
      </div>
      <div
        className="px-0 py-0 border-light"
        style={{ backgroundColor: "#2cd1be" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-0 py-0 tim-admin-portal-heading">
              <div className="tim-admin-portal-header py-2 col-md-12 border-left border-right">
                <h4 className="text-left text-white pl-3 pt-2 pb-1">
                  TIM ADMINISTRATION PORTAL
                </h4>
              </div>
            </div>
            <div className="col-md-6 px-0"></div>
          </div>
        </div>
      </div>
      <div
        className="tim-admin-tabs-container py-0 px-0 mx-auto shadow"
        style={{ minWidth: "97%" }}
      >
        <div className="container">
          <div className="row">
            <div className=" col-sm-12 col-md p-0">
              <NavLink
                className="tim-admin-tab btn rounded-0 px-0 text-center mx-0 border-right  w-100 btn-secondary "
                to="TimAdminRequestsForChange"
              >
                REQUESTS FOR CHANGE
              </NavLink>
            </div>
            <div className="col-sm-12 col-md p-0">
              <NavLink
                className="tim-admin-tab btn rounded-0 px-0 text-center mx-0 border-right border-left w-100 btn-secondary "
                to="TimAdminPendingChanges"
              >
                PENDING CHANGES
              </NavLink>
            </div>
            <div className="col-sm-12 col-md p-0">
              <NavLink
                className="tim-admin-tab btn rounded-0 px-0 text-center mx-0 border-right border-left w-100 btn-secondary"
                to="TimAdminChangesCompleted"
              >
                CHANGES COMPLETED
              </NavLink>
            </div>
            <div className="col-sm-12 col-md p-0">
              <NavLink
                className="tim-admin-tab btn rounded-0 px-0 text-center mx-0 border-right border-left w-100 btn-secondary"
                to="TimAdminPendingForReview"
              >
                PENDING FOR REVIEW
              </NavLink>
            </div>
            <div className="col-sm-12 col-md p-0">
              <NavLink
                className="tim-admin-tab btn rounded-0 px-0 text-center mx-0 border-right border-left w-100 btn-secondary "
                to="TimAdminApproved"
              >
                APPROVED
              </NavLink>
            </div>
            <div className="col-sm-12 col-md p-0">
              <NavLink
                className="tim-admin-tab btn rounded-0 px-0 text-center mx-0  border-left w-100 btn-secondary"
                to="TimAdminVpApproval"
              >
                VP APPROVAL
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimAdminNav;
