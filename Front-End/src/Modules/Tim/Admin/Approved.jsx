import React, { useState, useEffect } from "react";
import { variables } from "../../../Routes/Variables";
import TimAdminNav from "../../Nav/Tim/Admin/TimAdminNav";
import DataTable from "../../../Shared/Datatable";

function TimAdminApproved() {
  const [data, setData] = useState([]);
  const [load, setload] = useState("");

  useEffect(() => {
    fetch(variables.API_URL + "VMAuditKpi")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload("loaded"));
  }, []);

  return (
    <div className="TimManagerRequest">
      <div className="container-fluid request-data">
        <TimAdminNav />
        {load === "loaded" ? (
          <DataTable
            className="tim-admin-table"
            data={data}
            submitButton={"Reset Records"}
            path="TimAdminApproved"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default TimAdminApproved;
