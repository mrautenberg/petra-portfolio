import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar"
import EtcPage from "./pages/EtcPage"
import AboutPage from "./pages/AboutPage"
import ProjectPage from "./pages/ProjectPage"

import "./App.css"

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ProjectPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/etc">
            <EtcPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
