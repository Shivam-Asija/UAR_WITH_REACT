import React from 'react';
import { Home } from "../Modules/Home";
import TimManagerPending from "../Modules/Tim/Manager/Pending";
import TimMangerRequests from "../Modules/Tim/Manager/Requests";
import TimManagerApproved from "../Modules/Tim/Manager/Approved";
import TimAdminRequestsForChange from "../Modules/Tim/Admin/RequestsForChange";
import TimAdminPendingChanges from "../Modules/Tim/Admin/PendingChanges";
import TimAdminChangesCompleted from "../Modules/Tim/Admin/ChangesCompleted";
import TimAdminPendingForReview from "../Modules/Tim/Admin/PendingForReview";
import TimAdminApproved from "../Modules/Tim/Admin/Approved";
import TimAdminVpApproval from "../Modules/Tim/Admin/VpApproval";
import EclipseMangerPending from "../Modules/Eclipse/Manager/Pending";
import EclipseMangerRequests from "../Modules/Eclipse/Manager/Requests";
import EclipseMangerApproved from "../Modules/Eclipse/Manager/Approved";
import EclipseAdminRequestsForChange from "../Modules/Eclipse/Admin/RequestForChange";
import EclipseAdminPendingChanges from "../Modules/Eclipse/Admin/PendingChanges";
import EclipseAdminChangesCompleted from "../Modules/Eclipse/Admin/ChangesCompleted";
import EclipseAdminPendingForReview from "../Modules/Eclipse/Admin/PendingForReview";
import EclipseAdminApproved from "../Modules/Eclipse/Admin/Approved";
import Request from "../Modules/Request/Request";
import Announcements from "../Modules/Announcements/Announcements"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Routes() {
  return <>
            <Route path="/" exact component={Home} />
            <Route path="/TimManagerPending" component={TimManagerPending} />
            <Route path="/TimManagerRequests" component={TimMangerRequests} />
            <Route path="/TimManagerApproved" component={TimManagerApproved} />
            <Route
              path="/TimAdminRequestsForChange"
              component={TimAdminRequestsForChange}
            />
            <Route
              path="/TimAdminPendingChanges"
              component={TimAdminPendingChanges}
            />
            <Route
              path="/TimAdminChangesCompleted"
              component={TimAdminChangesCompleted}
            />
            <Route
              path="/TimAdminPendingForReview"
              component={TimAdminPendingForReview}
            />
            <Route path="/TimAdminApproved" component={TimAdminApproved} />
            <Route path="/TimAdminVpApproval" component={TimAdminVpApproval} />
            <Route
              path="/EclipseMangerPending"
              component={EclipseMangerPending}
            />
            <Route
              path="/EclipseMangerRequests"
              component={EclipseMangerRequests}
            />
            <Route
              path="/EclipseMangerApproved"
              component={EclipseMangerApproved}
            />
            <Route
              path="/EclipseAdminRequestsForChange"
              component={EclipseAdminRequestsForChange}
            />
            <Route
              path="/EclipseAdminPendingChanges"
              component={EclipseAdminPendingChanges}
            />
            <Route
              path="/EclipseAdminChangesCompleted"
              component={EclipseAdminChangesCompleted}
            />
            <Route
              path="/EclipseAdminPendingForReview"
              component={EclipseAdminPendingForReview}
            />
            <Route
              path="/EclipseAdminApproved"
              component={EclipseAdminApproved}
            />
            <Route path="/Request" component={Request} />  
            <Route path="/Announcements" component={Announcements} />  
  </>;
}

export default Routes;
