import React, { useState, useEffect } from "react";
import { variables } from "../../../Variables";
import EclipseAdminNav from "../../Nav/Eclipse/Admin/EclipseAdminNav";
import DataTable from "../../DataTable/index";

function EclipseAdminChangesCompleted() {
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
          <DataTable loaded={true} data={data} submitButton={"Reset Records"} />
        ) : (
          <DataTable loaded={false} data={data} />
        )}
      </div>
    </div>
  );
}

export default EclipseAdminChangesCompleted;
