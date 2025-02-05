// src/components/NavBar.jsx
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/directors">Directors</Link>
      <Link to="/actors">Actors</Link>
    </nav>
  );
}

export default NavBar;
