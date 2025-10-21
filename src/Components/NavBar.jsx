import { NavLink } from "react-router-dom";
//import "./NavBar.css";  // Importa el CSS

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
