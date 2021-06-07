import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";

// @TODO: styled components
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <h1>yay, let's go!</h1>
      </Switch>
    </Router>
  );
};

export default App;
