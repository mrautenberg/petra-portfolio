// Navlink used for activeClassName
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="nav-text">
        <h2 className="nav-header">Petra Rautenberg Landfors</h2>
        <p className="nav-subheader">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
      <nav>
        <div>
          <ul className="nav-link">
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="selected"
              >
                Portfolio</NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/about"
                activeClassName="selected">
                Om mig
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/etc"
                activeClassName="selected"
              >
                Kul grejer
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
