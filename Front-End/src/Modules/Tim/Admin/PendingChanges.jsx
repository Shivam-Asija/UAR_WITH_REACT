import React, { useState, useEffect } from "react";
import { variables } from "../../../Routes/Variables";
import TimAdminNav from "../../Nav/Tim/Admin/TimAdminNav";
import DataTable from "../../../Shared/Datatable";

function TimAdminPendingChanges() {
  const [data, setData] = useState([]);
  const [load, setload] = useState("");

  useEffect(() => {
    fetch(variables.API_URL + "VMAuditKpi")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload("loaded"));
  }, []);

  return (
    <div className="TimAdminRequest">
      <div className="container-fluid request-data">
        <TimAdminNav />
        {load === "loaded" ? (
          <DataTable
            className="tim-admin-table"
            data={data}
            submitButton={"Reset Records"}
            path="TimAdminPendingChanges"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default TimAdminPendingChanges;
