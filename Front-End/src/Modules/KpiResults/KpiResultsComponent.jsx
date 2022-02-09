import React, {useState, useEffect} from 'react';
import KpiLogo from "../../Shared/Images/KPILogo.svg";
import { variables } from '../../Routes/Variables';
import { NavLink } from "react-router-dom";
import DoughnutChart from '../Chart/DoughnutChart';
import DataTable from '../../Shared/Datatable';
import KpiDataTable from "../KpiDatatable/KpiDatatable";
import "./KpiResults.css";

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}    

function KpiResultsComponent() {

    const [activePage, setActivePage] = useState("Eclipse");

    const [data, setData] = useState([]);
    const [load, setload] = useState(false);

    const forceUpdate = useForceUpdate();

    useEffect(() => {
        fetch(variables.API_URL + "ApprovedRequests")
        .then((response) => response.json())
        .then((json) => setData(json))
        .then(setload(true));
    },[]);

    const fetchData = (target) => {
        setData(data);
    }


  return (
      <div>
          <div className="after-header-bar"></div>
          <div class="bg-light border-secondary">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 bg-light">
                        <img class="img-fluid d-block mt-3 pl-3 pt-4 pb-3" src={KpiLogo} />
                    </div>
                </div>
            </div>
        </div>
        <div class="px-0 py-0 border-light shadow">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 px-0 py-0">
                        <div class="col-md-12 py-1 pt-2 pb-1 border-left border-bottom border-right border-light kpiresults-bar">
                            <div class="col-md-12 mt-2 mb-3">
                                <h4 class="text-left text-white pl-3">&nbsp;</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 p-0 pl-2">
                        <div class="row">
                            <div class="col-sm-12 col-md p-0 Eclipse-tab">
                                {
                                    activePage === "Eclipse" ? (
                                        <NavLink 
                                            class="btn rounded-0 text-center w-100 m-0 py-3 btn-lg btn-primary" 
                                            onClick={() => {setActivePage("Eclipse"); fetchData("Eclipse");}} 
                                            to="KpiResultsComponent"
                                            >ECLIPSE
                                        </NavLink>

                                        
                                    ) : (
                                        <NavLink 
                                            class="btn rounded-0 text-center border-right w-100 m-0  py-3 text-muted btn-lg btn-light" 
                                            onClick={() => {setActivePage("Eclipse"); fetchData("Eclipse"); }} 
                                            to="KpiResultsComponent"
                                            >ECLIPSE
                                        </NavLink>                                        
                                    )
                                }
                            </div>
                            <div class="col-sm-12 col-md p-0 Tim-tab">
                                {
                                    activePage === "Tim" ? (
                                        <NavLink 
                                            class="btn rounded-0 text-center w-100 m-0 py-3 btn-lg btn-primary" 
                                            onClick={() => {setActivePage("Tim"); fetchData("Tim"); }} 
                                            to="KpiResultsComponent"
                                            >TIM
                                        </NavLink>

                                        
                                    ) : (
                                        <NavLink 
                                            class="btn rounded-0 text-center border-right w-100 m-0  py-3 text-muted btn-lg btn-light" 
                                            onClick={() => {setActivePage("Tim"); fetchData("Tim");}} 
                                            to="KpiResultsComponent"
                                            >TIM
                                        </NavLink>                                        
                                    )
                                }                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   

        <div class="container-fluid pl-2 pr-2">
            <div class="row m-0">
                <div class="col-md-12 col-lg">
                    <div class="card card-kpi px-0 mx-0 mt-3">
                        <div class="card-header card-header-success card-header-icon">
                            <h2 class="text-dark p-1">KPI Summary</h2>
                        </div>
                        <div class="card-body container-fluid">
                            <div class="row">
                                <div class="col-md-12 col-lg">
                                    <DoughnutChart />
                                </div>
                                <div class="col-md-12 col-lg text-center align-middle vertical-align-center">
                                    <div class="row h-auto p-3 m-2 rounded-0 text-light bg-success">
                                        <div class="col my-auto">
                                            {/* <i class="material-icons" style="font-size: 55px">done_outline</i> */}
                                        </div>
                                        <div class="col">
                                            <h3 class="m-0" style={{fontSize: "45px"}}>0</h3>
                                            <h5 class="m-0"><b>Approved</b></h5>
                                        </div>
                                    </div>
                                    <div class="row h-auto p-3 m-2 rounded-0 text-light" style={{backgroundColor: "#00629B"}}>
                                        <div class="col my-auto">
                                            {/* <i class="material-icons" style={{fontSize: "55px"}>insert_chart_outlined</i> */}
                                        </div>
                                        <div class="col">
                                            <h3 class="m-0" style={{fontSize: "45px"}}>4</h3>
                                            <h5 class="m-0"><b>Change Requests</b></h5>
                                        </div>
                                    </div>
                                    <div class="row h-auto p-3 m-2 rounded-0 text-light" style={{backgroundColor: "#787878"}}>
                                        <div class="col my-auto">
                                            <i class="material-icons" style={{fontSize: "55px"}}></i>
                                        </div>
                                        <div class="col">
                                            <h3 class="m-0" style={{fontSize: "45px"}}>8439</h3>
                                            <h5 class="m-0"><b>Pending Records</b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg">
                    <div class="card card-kpi px-0 mx-0 mt-3">
                        <div class="card-header card-header-success card-header-icon">
                            <div class="row my-2 align-items-end">
                                <div class="col-md-5">
                                    <h2 class="text-dark p-0 m-0">KPI By Manager</h2>
                                </div>
                            </div>
                        </div>
                        <div class="card-body table-responsive">
                            {load && activePage === "Eclipse"? (
                            <KpiDataTable
                                data={data}
                                submitButton=""
                                path="TimAdminApproved"
                            />
                            ) : (
                            ""
                            )}
                            {load && activePage === "Tim"? (
                            <KpiDataTable
                                data={data}
                                submitButton=""
                                path="TimAdminApproved"
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
