import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import BookBtn from "./BookBtn";
import { useId, useRef } from "react";
import "./navbar.scss";
import { useToggle } from "../hooks/useToggle";
import useClickOutside from "../hooks/useClickOutside";
import { twMerge } from "tailwind-merge";
import useMediaQuery from "../hooks/useMediaQuery";

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

const navHoverClass = (
  isActive,
  defaultTextColor = "text-dark",
  activeTextColor = "text-highlight-blue"
) => {
  return `relative after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:transition-transform hover:after:scale-100 after:opacity-40 ${
    isActive
      ? `after:scale-100 after:bg-primary ${activeTextColor}`
      : `after:bg-dark ${defaultTextColor}`
  }`;
};

const NavbarDropdown = () => {
  const bigScreen = useMediaQuery('(min-width: 640px)')
  const id = useId();
  const [open, toggle, setOpen] = useToggle();
  const dropdownRef = useRef();
  useClickOutside(dropdownRef, (e) => {
    setOpen(false);
  });

  if (bigScreen && open) setOpen(false)

  return (
    <div className="navbar-dropdown" id={id} ref={dropdownRef}>
      <div
        className={`${
          !open ? "collapsible" : "collapsed"
        } navbar-dropdown__content absolute left-0 right-0 z-10 mx-auto mt-3 flex w-5/6 flex-col items-center rounded-lg bg-primary bg-opacity-90 transition-all sm:hidden`}
        id={id}
      >
        <ul className="flex flex-col items-center gap-4 px-1 py-5">
          {nav_links.map((item, i) => (
            <li key={item.label + i}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  twMerge(
                    navHoverClass(
                      isActive,
                      "text-white",
                      "text-highlight-yellow"
                    ),
                    "text-lg font-medium underline-offset-2 hover:text-highlight-yellow"
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex w-full border-t border-t-white border-opacity-40 py-3">
          <BookBtn className="mx-auto shadow-xl" />
        </div>
      </div>
      <button
        className="navbar-toggler grid items-center sm:hidden"
        type="button"
        data-toggle="collapsible"
        data-target={id}
        aria-controls={id}
        onClick={toggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav
      className={`space-between navbar absolute top-0 z-50 mt-3 flex w-full items-center sm:mt-8`}
      style={{ paddingInline: "var(--side-padding)" }}
    >
      <div className="grid place-items-center">
        <a href="">
          <img src={logo} alt="Logo" className="aspect-square w-24 sm:w-28" />
        </a>
      </div>
      <div className="navbar-right ml-auto">
        <ul className="hidden items-center gap-4 text-lg sm:flex">
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
          <BookBtn className={"ml-5 px-6"} />
        </ul>
        <NavbarDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
