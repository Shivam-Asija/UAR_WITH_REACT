import React, { useState, useEffect } from "react";
import { variables } from "../../../Routes/Variables";
import TimManagerNav from "../../Nav/Tim/Manager/TimManagerNav";
import DataTable from "../../../Shared/Datatable";

const TimManagerApproved = () => {
  const [data, setData] = useState([]);
  const [load, setload] = useState("");

  useEffect(() => {
    fetch(variables.API_URL + "VMAuditKpi")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload("loaded"));
  }, []);

  return (
    <div className="container-fluid request-data">
      <TimManagerNav heading="APPROVED" />

      {load === "loaded" ? (
        <DataTable
          className="tim-manager-table"
          data={data}
          submitButton={"Submit Approval"}
          path="TimManagerApproved"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default TimManagerApproved;
