import React, { useState, useEffect } from "react";
import KpiLogo from "../../Shared/Images/KPILogo.svg";
import { variables } from "../../Routes/Variables";
import { NavLink } from "react-router-dom";
import DoughnutChart from "../Chart/DoughnutChart";
import KpiDataTable from "../KpiDatatable/KpiDatatable";
import "./KpiResults.css";

function KpiResultsComponent() {
  const [activePage, setActivePage] = useState("Eclipse");

  const [data, setData] = useState([]);
  const [load, setload] = useState(false);
  const [pending, setPending] = useState(0);
  const [change, setChange] = useState(0);
  const [approved, setApproved] = useState(0);

  useEffect(() => {
    fetch(variables.API_URL + "VMAuditKpi/Eclipse")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload(true));
  }, []);

  const fetchData = (target) => {
    fetch(variables.API_URL + "VMAuditKpi/" + target)
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload(true));
    setPending(pending);
    setChange(change);
    setApproved(approved);
  };

  return (
    <div>
      <div className="after-header-bar"></div>
      <div className="bg-light border-secondary">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-light">
              <img
                className="img-fluid d-block mt-3 pl-3 pt-4 pb-3"
                src={KpiLogo}
                alt="kpi logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-0 py-0 border-light shadow">
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-0 py-0">
              <div className="col-md-12 py-1 pt-2 pb-1 border-left border-bottom border-right border-light kpiresults-bar">
                <div className="col-md-12 mt-2 mb-3">
                  <h4 className="text-left text-white pl-3">&nbsp;</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0 pl-2">
              <div className="row">
                <div className="col-sm-12 col-md p-0 Eclipse-tab">
                  {activePage === "Eclipse" ? (
                    <NavLink
                      className="btn rounded-0 text-center w-100 m-0 py-3 btn-lg btn-primary"
                      onClick={() => {
                        setActivePage("Eclipse");
                        fetchData("Eclipse");
                      }}
                      to="KpiResultsComponent"
                    >
                      ECLIPSE
                    </NavLink>
                  ) : (
                    <NavLink
                      className="btn rounded-0 text-center border-right w-100 m-0  py-3 text-muted btn-lg btn-light"
                      onClick={() => {
                        setActivePage("Eclipse");
                        fetchData("Eclipse");
                      }}
                      to="KpiResultsComponent"
                    >
                      ECLIPSE
                    </NavLink>
                  )}
                </div>
                <div className="col-sm-12 col-md p-0 Tim-tab">
                  {activePage === "Tim" ? (
                    <NavLink
                      className="btn rounded-0 text-center w-100 m-0 py-3 btn-lg btn-primary"
                      onClick={() => {
                        setActivePage("Tim");
                        fetchData("Tim");
                      }}
                      to="KpiResultsComponent"
                    >
                      TIM
                    </NavLink>
                  ) : (
                    <NavLink
                      className="btn rounded-0 text-center border-right w-100 m-0  py-3 text-muted btn-lg btn-light"
                      onClick={() => {
                        setActivePage("Tim");
                        fetchData("Tim");
                      }}
                      to="KpiResultsComponent"
                    >
                      TIM
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pl-2 pr-2">
        <div className="row m-0">
          <div className="col-md-12 col-lg kpi-card">
            <div className="card card-kpi px-0 mx-0 mt-3">
              <div className="card-header card-header-success card-header-icon">
                <h4 className="text-dark p-1">KPI Summary</h4>
              </div>
              <div className="card-body container-fluid">
                <div className="row">
                  <div className="col-md-12 col-lg">
                    {load && activePage === "Eclipse" ? (
                      <DoughnutChart
                        pending={pending}
                        change={change}
                        approved={approved}
                      />
                    ) : (
                      ""
                    )}
                    {load && activePage === "Tim" ? (
                      <DoughnutChart
                        pending={pending}
                        change={change}
                        approved={approved}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-md-12 col-lg text-center align-middle vertical-align-center">
                    <div className="row h-auto p-3 m-2 rounded-0 text-light bg-success">
                      <div className="col my-auto">
                        {/* <i className="material-icons" style="font-size: 55px">done_outline</i> */}
                      </div>
                      <div className="col">
                        <h3 className="m-0" style={{ fontSize: "45px" }}>
                          {approved > 0 ? approved : "0"}
                        </h3>
                        <h5 className="m-0">
                          <b>Approved</b>
                        </h5>
                      </div>
                    </div>
                    <div
                      className="row h-auto p-3 m-2 rounded-0 text-light"
                      style={{ backgroundColor: "#00629B" }}
                    >
                      <div className="col my-auto">
                        {/* <i className="material-icons" style={{fontSize: "55px"}>insert_chart_outlined</i> */}
                      </div>
                      <div className="col">
                        <h3 className="m-0" style={{ fontSize: "45px" }}>
                          {change > 0 ? change : "0"}
                        </h3>
                        <h5 className="m-0">
                          <b>Change Requests</b>
                        </h5>
                      </div>
                    </div>
                    <div
                      className="row h-auto p-3 m-2 rounded-0 text-light"
                      style={{ backgroundColor: "#787878" }}
                    >
                      <div className="col my-auto">
                        <i
                          className="material-icons"
                          style={{ fontSize: "55px" }}
                        ></i>
                      </div>
                      <div className="col">
                        <h3 className="m-0" style={{ fontSize: "45px" }}>
                          {pending > 0 ? pending : "0"}
                        </h3>
                        <h5 className="m-0">
                          <b>Pending Records</b>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg kpi-card">
            <div className="card card-kpi px-0 mx-0 mt-3">
              <div className="card-header card-header-success card-header-icon">
                <div className="row my-2 align-items-end">
                  <div className="col-md-5">
                    <h4 className="text-dark p-0 m-0">KPI By Manager</h4>
                  </div>
                </div>
              </div>
              <div className="card-body table-responsive">
                {load && activePage === "Eclipse" ? (
                  <KpiDataTable
                    data={data}
                    setPending={setPending}
                    setChange={setChange}
                    setApproved={setApproved}
                  />
                ) : (
                  ""
                )}
                {load && activePage === "Tim" ? (
                  <KpiDataTable
                    data={data}
                    setPending={setPending}
                    setChange={setChange}
                    setApproved={setApproved}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KpiResultsComponent;
