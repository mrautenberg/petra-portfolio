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
        <ul className="nav-link">
          <li>
            <NavLink to="/">Portfolio</NavLink>
          </li>
          <li>
            <NavLink exact to="/about">
              Om mig
            </NavLink>
          </li>
          <li>
            <NavLink to="/etc">Kul grejer</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
