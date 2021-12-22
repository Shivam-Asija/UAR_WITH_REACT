import React, { useState, useEffect } from "react";
import { variables } from "../../../Variables";
import TimManagerNav from "../../Nav/Tim/Manager/TimManagerNav";
import DataTable from "../../DataTable/index";

function TimManagerPending() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(variables.API_URL + "VMAuditKpi")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="TimManagerRequest">
      <div className="container-fluid request-data">
        <TimManagerNav heading="PENDING FOR REVIEW" />

        <DataTable data={data} />
      </div>
    </div>
  );
}

export default TimManagerPending;
