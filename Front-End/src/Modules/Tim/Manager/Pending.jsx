import React, { useState, useEffect } from "react";
import { variables } from "../../../Routes/Variables";
import TimManagerNav from "../../Nav/Tim/Manager/TimManagerNav";
import DataTable from "../../../Shared/Datatable/Datatable";

function TimManagerPending() {
  const [data, setData] = useState([]);
  const [load, setload] = useState("");

  useEffect(() => {
    fetch(variables.API_URL + "changerequests")
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
        path="TimManagerPending"
      />
    );
  }

  return (
    <div className="TimManagerRequest">
      <div className="container-fluid request-data">
        <TimManagerNav heading="PENDING FOR REVIEW" />
        {datatable}
      </div>
    </div>
  );
}

export default TimManagerPending;
