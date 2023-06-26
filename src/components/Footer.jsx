import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import './footer.scss'
import { nav_links, socials } from "../data";
import { twMerge } from "tailwind-merge";

const footerNavHoverClass = (
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

const Footer = ({ className }) => {
    return <footer className={twMerge("py-5 bg-footer section-container flex items-center sm:flex-row flex-col", className)}>
        <div className="w-16 sm:w-12 aspect-square">
            <img src={logo} alt="logo" className="w-full aspect-square object-cover"/>
        </div>
        <div className="mt-6 sm:mt-0 sm:ml-auto flex flex-col sm:flex-row gap-10 items-center justify-center">
            <ul className="flex flex-col sm:flex-row items-center gap-4">
                {nav_links.map((item, i) => (
                    <li key={item.label + i}>
                    <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                        twMerge(
                            footerNavHoverClass(
                            isActive,
                            "text-white",
                            "text-highlight-yellow"
                            ),
                            "font-medium underline-offset-2 hover:text-highlight-yellow"
                        )
                        }
                    >
                        {item.label}
                    </NavLink>
                    </li>
                ))}
            </ul>
            <ul className="flex gap-4 sm:gap-6">
                {socials.map(({ name, icon: Icon, to }) => <li key={name}>
                    <Link to={to}>
                        <Icon className={'footer-icon'}/>
                    </Link>
                </li>)}
            </ul>
        </div>
    </footer>
}

export default Footer;