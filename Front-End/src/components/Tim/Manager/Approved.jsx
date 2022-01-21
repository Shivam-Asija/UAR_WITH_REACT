import React, { useState, useEffect } from "react";
import { variables } from "../../../Variables";
import TimManagerNav from "../../Nav/Tim/Manager/TimManagerNav";
import DataTable from "../../DataTable/index";

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
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default TimManagerApproved;
