// Navlink used for activeClassName
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
