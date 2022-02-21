import React, { useState, useEffect } from "react";
import { variables } from "../../../Routes/Variables";
import TimManagerNav from "../../Nav/Tim/Manager/TimManagerNav";
import DataTable from "../../../Shared/Datatable";

const TimManagerApproved = () => {
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
        submitButton={"Submit Approval"}
        path="TimManagerApproved"
      />
    );
  }

  return (
    <div className="container-fluid request-data">
      <TimManagerNav heading="APPROVED" />
      {datatable}
    </div>
  );
};

export default TimManagerApproved;
