import React, { useState, useEffect } from "react";
import Uarlogo from "../../Shared/Images/UARlogo.svg";
import "./AnnouncementsComponent.css";
import { makeStyles, withStyles } from "@material-ui/core";
import { variables } from "../../Routes/Variables";

const useStyles = makeStyles({
  outerDiv: {
    borderLeft: "0 solid",
    borderRight: "0 solid",
    paddingBottom: "30px",
    marginTop: "2.2em",
  },
});

function Announcements() {
  const [announcementData, setAnnouncementData] = useState([]);

  const fetchData = () => {
    fetch(variables.API_URL + "announcements")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAnnouncementData(data);
        console.log(announcementData);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <div className="container">
      <div className="row">
        <div className={`col-md-12 ${classes.outerDiv}`}>
          <h3 className="pl-4 mt-3">
            <br />
          </h3>
          <div className="py-1">
            <div className="container">
              <div className="row">
                <div className="col">
                  <img
                    className="img-fluid d-block"
                    src={Uarlogo}
                    width="400"
                    alt=""
                  />
                </div>
              </div>
              <div className="row announcement-section-bar">
                <div className="col-md-6 border mt-2 color-blue"></div>
                <div className="col-md-6 mt-2 py-3 color-grey"></div>
              </div>
              <div className="row bg-light">
                <div className="col m-2 align-left">
                  <div className="row">
                    <div className="col-md ">
                      <h2 className="mt-2 font-bold color-navy">
                        Announcements
                      </h2>
                    </div>
                  </div>
                  {announcementData.length > 0 &&
                    announcementData.map((user) => (
                      <div className="row">
                        <div className="col-md">
                          <hr />
                          <h4 className="font-large color-navy">
                            {user.Title}
                          </h4>

                          <p className="mb-0">{user.Message}</p>
                          <p className="font-italic font-12px">
                            Created By {user.CreatedByName} -{" "}
                            {new Date(user.LastUpdatedDate).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  <div className="pagination">
                    <a className="active" href="#">
                      1
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
