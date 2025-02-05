// src/components/NavBar.jsx
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar" role="navigation">
      <NavLink 
        to="/" 
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink 
        to="/directors" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Directors
      </NavLink>
      <NavLink 
        to="/actors" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Actors
      </NavLink>
    </nav>
  );
}

export default NavBar;
