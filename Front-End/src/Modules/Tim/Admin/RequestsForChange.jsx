import React, { useState, useEffect } from "react";
import { variables } from "../../../Routes/Variables";
import TimAdminNav from "../../Nav/Tim/Admin/TimAdminNav";
import DataTable from "../../../Shared/Datatable";

function TimAdminRequestsForChange() {
  const [data, setData] = useState([]);
  const [load, setload] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    fetch(variables.API_URL + "EclipseManagerPending")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload(true));
  };

  let datatable = "";

  if (load) {
    datatable = (
      <DataTable
        loaded={true}
        data={data}
        submitButton={"Reset Records"}
        path="TimAdminRequestsForChange"
      />
    );
  }

  return (
    <div className="TimManagerRequest">
      <div className="container-fluid request-data">
        <TimAdminNav />
        {datatable}
      </div>
    </div>
  );
}

export default TimAdminRequestsForChange;
