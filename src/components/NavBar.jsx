import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
    <NavLink 
    to='/'
    end
    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
    >
      Home
    </NavLink>
    <NavLink
    to='/directors'
    className={({ isActive }) => (isActive ? 'active' : '')}
    >
      Directors
    </NavLink>
    <NavLink
    to='/actors'
    className={({ isActive }) => (isActive ? 'active' : '')}
    >
      Actors
    </NavLink>
    </nav>
    );
};

export default NavBar;
