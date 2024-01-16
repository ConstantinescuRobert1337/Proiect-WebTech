import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginSignup />} />
    </Switch>
  </Router>,
  document.getElementById("root")
);