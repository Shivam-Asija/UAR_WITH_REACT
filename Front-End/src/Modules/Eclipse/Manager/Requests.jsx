import React, { useState, useEffect } from "react";
import { variables } from "../../../Routes/Variables";
import EclipseManagerNav from "../../Nav/Eclipse/Manager/EclipseManagerNav";
import DataTable from "../../../Shared/Datatable/Datatable";

function EclipseMangerRequests() {
  const [data, setData] = useState([]);
  const [load, setload] = useState("");

  useEffect(() => {
    fetch(variables.API_URL + "ChangeRequests")
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
        submitButton={"Submit Approval"}
        path="EclipseManagerRequests"
      />
    );
  }

  return (
    <div className="EclipseManagerRequest">
      <div className="container-fluid request-data">
        <EclipseManagerNav heading="REQUEST FOR CHANGES" />
        {datatable}
      </div>
    </div>
  );
}

export default EclipseMangerRequests;
