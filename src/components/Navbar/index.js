import { NavLink } from "react-router-dom";
import "./index.css";

function Navbar() {
  return (
    <nav className="py-2">
      <div className="container mx-auto flex flex-col sm:flex-row">
        <div className="logo mb-2 sm:mb-0">
          <NavLink to="portfolio-react/" className="brand text-2xl">
            &lt;<span className="lambda font-bold">λ</span> Reli Slazar /&gt;
          </NavLink>
        </div>

        <div className="links flex gap-2 items-center sm:justify-end sm:ml-auto sm:text-lg">
          <NavLink
            to="portfolio-react/"
            className={`link px-2 ${(isActive) => (isActive ? "active" : "")}`}
          >
            Home
          </NavLink>

          <NavLink
            to="portfolio-react/portfolio"
            className={`link px-2 ${(isActive) => (isActive ? "active" : "")}`}
          >
            Portfolio
          </NavLink>

          <NavLink
            to="portfolio-react/blog"
            className={`link px-2 ${(isActive) => (isActive ? "active" : "")}`}
          >
            Blog
          </NavLink>

          <NavLink
            to="portfolio-react/art"
            className={`link px-2 ${(isActive) => (isActive ? "active" : "")}`}
          >
            Art
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
