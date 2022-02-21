import React, { useState, useEffect } from "react";
import { variables } from "../../../Routes/Variables";
import TimAdminNav from "../../Nav/Tim/Admin/TimAdminNav";
import DataTable from "../../../Shared/Datatable";

function TimAdminVpApproval() {
  const [data, setData] = useState([]);
  const [load, setload] = useState("");

  useEffect(() => {
    fetch(variables.API_URL + "EclipseManagerPending")
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
        path="TimAdminVpApproval"
      />
    );
  }

  return (
    <div className="TimManagerRequest">
      <div className="container-fluid request-data">
        <TimAdminNav heading="REQUEST FOR CHANGES" />
        {datatable}
      </div>
    </div>
  );
}

export default TimAdminVpApproval;
