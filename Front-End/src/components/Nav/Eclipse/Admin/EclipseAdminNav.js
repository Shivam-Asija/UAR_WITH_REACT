import React from "react";
import EclipseUarLogo from "../../../../EclipseUarLogo.svg";
import { NavLink } from "react-router-dom";

function EclipseAdminNav(props) {
  return (
    <div className="eclipse-admin-navbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 bg-light">
            <img
              className="img-fluid d-block mt-1 pl-3 pt-4 pb-3"
              src={EclipseUarLogo}
            />
          </div>
        </div>
      </div>
      <div
        className="px-0 py-0 border-light"
        style={{ backgroundColor: "#0099D8" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-0 py-0 eclipse-admin-portal-heading">
              <div className="eclipse-admin-portal-header py-2 col-md-12 border-left border-right">
                <h4 className="text-left text-white pl-3 pt-2 pb-1">
                  Eclipse ADMINISTRATION PORTAL
                </h4>
              </div>
            </div>
            <div className="col-md-6 px-0"></div>
          </div>
        </div>
      </div>
      <div
        className="eclipse-admin-tabs-container py-0 px-0 mx-auto shadow"
        style={{ minWidth: "97%" }}
      >
        <div className="container">
          <div className="row">
            <div className=" col-sm-12 col-md p-0">
              <NavLink
                className="eclipse-admin-tab btn rounded-0 px-0 text-center mx-0 border-right  w-100 btn-secondary "
                to="EclipseAdminRequestsForChange"
              >
                REQUESTS FOR CHANGE
              </NavLink>
            </div>
            <div className="col-sm-12 col-md p-0">
              <NavLink
                className="eclipse-admin-tab btn rounded-0 px-0 text-center mx-0 border-right border-left w-100 btn-secondary "
                to="EclipseAdminPendingChanges"
              >
                PENDING CHANGES
              </NavLink>
            </div>
            <div className="col-sm-12 col-md p-0">
              <NavLink
                className="eclipse-admin-tab btn rounded-0 px-0 text-center mx-0 border-right border-left w-100 btn-secondary"
                to="EclipseAdminChangesCompleted"
              >
                CHANGES COMPLETED
              </NavLink>
            </div>
            <div className="col-sm-12 col-md p-0">
              <NavLink
                className="eclipse-admin-tab btn rounded-0 px-0 text-center mx-0 border-right border-left w-100 btn-secondary"
                to="EclipseAdminPendingForReview"
              >
                PENDING FOR REVIEW
              </NavLink>
            </div>
            <div className="col-sm-12 col-md p-0">
              <NavLink
                className="eclipse-admin-tab btn rounded-0 px-0 text-center mx-0 border-right border-left w-100 btn-secondary "
                to="EclipseAdminApproved"
              >
                APPROVED
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EclipseAdminNav;
