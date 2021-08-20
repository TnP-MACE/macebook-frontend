import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NoMatch from "./pages/NoMatch/NoMatch";

function App() {
  return (
    <div>
      <Helmet>
        <title>Macebook</title>
      </Helmet>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path={["/", "/index"]} component={Home} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
