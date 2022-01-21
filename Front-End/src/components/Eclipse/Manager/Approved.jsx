import React, { useState, useEffect } from "react";
import { variables } from "../../../Variables";
import EclipseManagerNav from "../../Nav/Eclipse/Manager/EclipseManagerNav";
import DataTable from "../../DataTable/index";

function EclipseMangerApproved() {
  const [data, setData] = useState([]);
  const [load, setload] = useState("");

  useEffect(() => {
    fetch(variables.API_URL + "ChangeRequests")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload("loaded"));
  }, []);

  return (
    <div className="EclipseManagerApproved">
      <div className="container-fluid request-data">
        <EclipseManagerNav heading="APPROVED" />
        {load === "loaded" ? (
          <DataTable
            loaded={true}
            data={data}
            submitButton={"Submit Approval"}
          />
        ) : (
          <DataTable loaded={false} data={data} />
        )}
      </div>
    </div>
  );
}

export default EclipseMangerApproved;
