import React, { useState, useEffect } from "react";
import { variables } from "../../../Routes/Variables";
import EclipseAdminNav from "../../Nav/Eclipse/Admin/EclipseAdminNav";
import DataTable from "../../../Shared/Datatable";

function EclipseAdminPendingForReview() {
  const [data, setData] = useState([]);
  const [load, setload] = useState("");

  useEffect(() => {
    fetch(variables.API_URL + "VMAuditKpi")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload("loaded"));
  }, []);

  return (
    <div className="EclipseAdminPending">
      <div className="container-fluid request-data">
        <EclipseAdminNav />
        {load === "loaded" ? (
          <DataTable loaded={true} data={data} submitButton={"Reset Records"} path="EclipseAdminPendingForReview" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default EclipseAdminPendingForReview;
