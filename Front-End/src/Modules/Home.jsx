import React, { Component } from "react";
import logo from "../Shared/Images/UARlogo.svg";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <Container>
        <div className="landing-page ">
          <div className="container">
            <div className="row">
              <div
                style={{
                  borderLeft: "0 solid",
                  borderRight: "0 solid",
                }}
                className="col"
              >
                <div className="py-1">
                  <div className="container">
                    <div className="row uar-logo">
                      <div className="col ">
                        <img
                          className="img-fluid d-block"
                          src={logo}
                          width="400"
                          alt="logo"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="multicolor-bar col-md-6 border mt-2"
                        style={{
                          backgroundColor: "#0099D8",
                        }}
                      ></div>
                      <div
                        className="multicolor-bar col-md-6 mt-2 py-3"
                        style={{
                          backgroundColor: "#E4E4E4",
                        }}
                      ></div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row"></div>
                        <div className="row">
                          <div
                            className="col-md-12"
                            data-toggle="popover"
                            data-original-title=""
                            title=""
                          >
                            <div className="row ml-1">
                              <div className="col-lg-6" style={{ zIndex: "1" }}>
                                <div className="card  border-0 pop-up p-0 rounded-0">
                                  <div className="">
                                    <div className="admin-card shadow-lg  pb-4">
                                      <div className="col-lg-12 text-left pt-2">
                                        <h4 className="text-light pt-4 text-center">
                                          <b>ADMINISTRATIVE PORTAL</b>
                                        </h4>
                                        <p className="mb-3 text-light pl-5">
                                          <b>SIGN IN</b>
                                        </p>
                                        <form className="text-center">
                                          <div className="form-group">
                                            <small className="form-text text-muted text-right"></small>
                                          </div>
                                          <NavLink
                                            to="/EclipseAdminRequestsForChange"
                                            className="eclipse-card-btn btn home-eclipse-btn text-light border text-center shadow btn-lg w-75 btn-info"
                                          >
                                            <b>ECLIPSE</b>
                                          </NavLink>
                                          <NavLink
                                            to="/TimAdminRequestsForChange"
                                            className="tim-card-btn btn  border text-center shadow btn-lg w-75 btn-success"
                                          >
                                            <b>TIM</b>
                                          </NavLink>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6" style={{ zIndex: "1" }}>
                                <div className="card border-0 pop-up p-0 rounded-0">
                                  <div className="">
                                    <div className=" manager-card shadow ">
                                      <div className="col-lg-12 text-left pt-2">
                                        <h4 className="text-light pt-4 text-center">
                                          <b>MANAGER PORTAL&nbsp;</b>
                                        </h4>
                                        <p
                                          className="manager-signin-text pl-5"
                                          style={{ color: "#ffffff" }}
                                        >
                                          <b>SIGN IN</b>
                                        </p>
                                        <form className="text-center">
                                          <div className="form-group">
                                            <small className="form-text text-muted text-right"></small>
                                          </div>
                                          <NavLink
                                            to="/EclipseMangerPending"
                                            className="eclipse-card-btn btn home-eclipse-btn text-light border text-center shadow btn-lg w-75 btn-info"
                                          >
                                            <b>ECLIPSE</b>
                                          </NavLink>
                                          <NavLink
                                            to="/timManagerPending"
                                            className="tim-card-btn btn  border text-center shadow btn-lg w-75 btn-success"
                                          >
                                            <b>TIM</b>
                                          </NavLink>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-lg-12" style={{ zIndex: "1" }}>
                          <div className="card pop-up rounded border-0 bg-light shadow">
                            <NavLink
                              className="announcement-btn btn rounded btn-lg btn-secondary m-0"
                              to="/Announcements"
                              href="#"
                            >
                              <b className="text-dark">ANNOUNCEMENTS</b>
                            </NavLink>
                            <p
                              className="text-white mb-0 p-4 pb-0 shadow-lg"
                              style={{ background: "#00629B" }}
                            >
                              <p>
                                <b>Eclipse Test</b> <br />
                                If you can see this, thanks
                              </p>
                            </p>
                          </div>
                          <div className="card-popup-kpi my-4 card pop-up rounded- border-0 shadow">
                            <a
                              className="btn rounded btn-lg"
                              href="/Kpi/Eclipse"
                            >
                              <b className="text-light">KPI RESULTS</b>
                            </a>
                          </div>
                          <div className="card border-0 pop-up rounded-0 shadow">
                            <a
                              className="esarf-btn btn rounded-0 btn-lg btn-secondary"
                              href="http://sarf.corp.chartercom.com/"
                            >
                              <b className="text-dark">ESARF</b>
                            </a>
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
      </Container>
    );
  }
}
