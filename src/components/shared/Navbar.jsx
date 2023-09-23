import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Our Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
