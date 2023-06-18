import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const navHoverClass = (isActive) => {
    return `relative after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:transition-transform hover:after:scale-100 ${
        isActive
          ? "text-highlight-blue after:scale-100 after:bg-primary"
          : "after:bg-dark text-dark"
      }`;
  }
  return (
    <nav
      className={`space-between absolute top-0 z-50 my-12 flex w-full items-center`}
      style={{ paddingInline: "var(--side-padding)" }}
    >
      <div className="">
        <a href="">
          <img src={logo} alt="Logo" className="aspect-square w-24" />
        </a>
      </div>
      <div className="navbar-right ml-auto">
        <ul className="flex gap-4 text-lg">
          <li>
            <NavLink
              to={""}
              className={({ isActive }) => navHoverClass(isActive)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/services"}
              className={({ isActive }) => navHoverClass(isActive)}
            >
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact-us"}
              className={({ isActive }) => navHoverClass(isActive)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
