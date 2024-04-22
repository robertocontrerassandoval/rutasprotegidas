import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "text-light");
  return (
    <div>

      <Nav className="bg-secondary justify-content-end gap-4">
        <NavLink
          className= {setActiveClass}
          to="/"
        >
          {" "}
          Home{" "}
        </NavLink>

        <NavLink
          className={setActiveClass}
          to="/pokemones"
        >
          {" "}
          Pokemones{" "}
        </NavLink>

        <NavLink
          className={setActiveClass}
          to="/personajes"
        >
          {" "}
          Personajes{" "}
        </NavLink>

      </Nav>
      
    </div>
  );
};
export default Navbar;
