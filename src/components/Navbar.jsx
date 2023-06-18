import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const nav_links = [
  {
    to: "",
    label: "Home",
  },
  {
    to: "/services",
    label: "Services",
  },
  {
    to: "/contact-us",
    label: "Contact us",
  },
];

const NavbarDropdown = () => {
  return (
    <div className="relative">
      <button className=""></button>
      <div></div>
    </div>
  );
};

const Navbar = () => {
  const navHoverClass = (isActive) => {
    return `relative after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:transition-transform hover:after:scale-100 after:opacity-40 ${
      isActive
        ? "text-highlight-blue after:scale-100 after:bg-primary"
        : "after:bg-dark text-dark"
    }`;
  };
  return (
    <nav
      className={`space-between absolute top-0 z-50 mt-3 flex w-full items-center sm:mt-12`}
      style={{ paddingInline: "var(--side-padding)" }}
    >
      <div className="">
        <a href="">
          <img
            src={logo}
            alt="Logo"
            className="aspect-square w-24 drop-shadow-md"
          />
        </a>
      </div>
      <div className="navbar-right ml-auto">
        <ul className="hidden gap-4 text-lg sm:flex">
          {nav_links.map((item, i) => (
            <li key={item.label + i}>
              <NavLink
                to={item.to}
                className={({ isActive }) => navHoverClass(isActive)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavbarDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
