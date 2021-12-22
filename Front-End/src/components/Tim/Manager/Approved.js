import React, { useState, useEffect } from "react";
import { variables } from "../../../Variables";
import TimManagerNav from "../../Nav/Tim/Manager/TimManagerNav";
import DataTable from "../../DataTable/index";

const TimManagerApproved = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(variables.API_URL + "VMAuditKpi")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="container-fluid request-data">
      <TimManagerNav heading="APPROVED" />

      <DataTable data={data} />
    </div>
  );
};

export default TimManagerApproved;
