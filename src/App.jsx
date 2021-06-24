import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import ResumePage from "./pages/resumepage/Resumepage"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <ResumePage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/blog/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/blogs/:id">
          <Single />
        </Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
        <Route exact path="/blogs">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
