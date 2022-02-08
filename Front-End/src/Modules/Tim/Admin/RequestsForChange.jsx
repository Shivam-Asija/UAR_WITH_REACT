import React, { useState, useEffect } from "react";
import { variables } from "../../../Routes/Variables";
import TimAdminNav from "../../Nav/Tim/Admin/TimAdminNav";
import DataTable from "../../../Shared/Datatable";

function TimAdminRequestsForChange() {
  const [data, setData] = useState([]);
  const [load, setload] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    fetch(variables.API_URL + "VMAuditKpi")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload(true));
  }

  return (
    <div className="TimManagerRequest">
      <div className="container-fluid request-data">
        <TimAdminNav />
        {load  ? (
          <DataTable
            className="tim-admin-table"
            data={data}
            path="TimAdminRequestsForChange"
            submitButton={"Reset Records"}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default TimAdminRequestsForChange;
