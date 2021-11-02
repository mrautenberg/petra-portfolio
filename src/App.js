import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"

import "./App.css"

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/projects">
            <ProjectPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
