import React, { useState, useEffect } from "react";
import { variables } from "../../../Variables";
import TimManagerNav from "../../Nav/Tim/Manager/TimManagerNav";
import DataTable from "../../DataTable/index";

function TimManagerPending() {
  const [data, setData] = useState([]);
  const [load, setload] = useState("");

  useEffect(() => {
    fetch(variables.API_URL + "changerequests")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload("loaded"));
  }, []);

  return (
    <div className="TimManagerRequest">
      <div className="container-fluid request-data">
        <TimManagerNav heading="PENDING FOR REVIEW" />
        {load === "loaded" ? (
          <DataTable
            loaded={true}
            data={data}
            submitButton={"Submit Approval"}
          />
        ) : (
          <DataTable loaded={false} data={data} />
        )}
        {/* <button id="button">Rows Selected </button>
        <span id="row-count"></span> */}
      </div>
    </div>
  );
}

export default TimManagerPending;
