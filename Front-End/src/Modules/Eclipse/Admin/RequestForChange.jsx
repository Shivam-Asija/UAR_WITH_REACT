import React, { useState, useEffect } from "react";
import { variables } from "../../../Routes/Variables";
import EclipseAdminNav from "../../Nav/Eclipse/Admin/EclipseAdminNav";
import DataTable from "../../../Shared/Datatable";

function EclipseAdminRequestsForChange() {
  const [data, setData] = useState([]);
  const [load, setload] = useState("");

  useEffect(() => {
    fetch(variables.API_URL + "VMAuditKpi")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload(true));
  }, []);

  let datatable = "";

  if (load) {
    datatable = (
      <DataTable
        loaded={true}
        data={data}
        submitButton={"Reset Records"}
        path="EclipseAdminRequestsForChange"
      />
    );
  }

  return (
    <div className="EclipseAdminPending">
      <div className="container-fluid request-data">
        <EclipseAdminNav />
        {datatable}
      </div>
    </div>
  );
}

export default EclipseAdminRequestsForChange;
