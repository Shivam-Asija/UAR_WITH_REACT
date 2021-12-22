import "./App.css";
import Header from "./components/Nav/Header";
import Footer from "./components/footer/Footer";
import { Home } from "./components/Home";
import TimManagerPending from "./components/Tim/Manager/Pending";
import TimMangerRequests from "./components/Tim/Manager/Request";
import TimManagerApproved from "./components/Tim/Manager/Approved";
import TimAdminRequestsForChange from "./components/Tim/Admin/RequestsForChange";
import TimAdminPendingChanges from "./components/Tim/Admin/PendingChanges";
import TimAdminChangesCompleted from "./components/Tim/Admin/ChangesCompleted";
import TimAdminPendingForReview from "./components/Tim/Admin/PendingForReview";
import TimAdminApproved from "./components/Tim/Admin/Approved";
import TimAdminVpApproval from "./components/Tim/Admin/VpApproval";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/timManagerPending" component={TimManagerPending} />
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
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
