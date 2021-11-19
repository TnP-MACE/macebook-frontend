import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NoMatch from "./pages/NoMatch/NoMatch";
import Profile from "./pages/Profile/Profile";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Signup from "./pages/Signup/Signup";
import CompleteProfile from "./pages/complete-profile/Complete-profile";
import Jobs from "./pages/Jobs/Jobs";
import JobApplicationForm from "./pages/JobApplicationForm/JobApplicationForm";
import Posts from "./pages/Posts/Posts";
import Settings from "./pages/Settings/Settings";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "../src/auth/privateRoute";
import isAuthenticated from "../src/auth/isAuthenticated";

function App() {
    return (
        <div>
            <Helmet>
                <title>Macebook</title>
            </Helmet>
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact authed={isAuthenticated()} path={["/", "/index", "/home"]} component={Home} />
                    <PrivateRoute exact authed={isAuthenticated()} path="/profile" component={Profile} />
                    <PrivateRoute exact authed={isAuthenticated()} path="/jobs" component={Jobs} />
                    <PrivateRoute exact authed={isAuthenticated()} path="/settings" component={Settings} />
                    <PrivateRoute exact authed={isAuthenticated()} path="/posts" component={Posts} />
                    <PrivateRoute
                        exact
                        authed={isAuthenticated()}
                        path="/job-application-form"
                        component={JobApplicationForm}
                    />
                    <Route exact path="/forgot-password" component={ForgotPassword} />
                    <Route exact path="/signup" component={Signup} />
                    <PrivateRoute
                        exact
                        authed={isAuthenticated()}
                        path="/complete-profile"
                        component={CompleteProfile}
                    />
                    <PrivateRoute exact authed={isAuthenticated()} path="/dashboard" component={Dashboard} />
                    <Route path="*" component={NoMatch} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
