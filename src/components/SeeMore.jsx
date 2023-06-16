import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const SeeMore = ({ to, className }) => (
  <Link
    to={to}
    className={twMerge(
      className,
      "text-xl tracking-widest text-highlight-blue underline underline-offset-4"
    )}
  >
    See more {">>"}
  </Link>
);

export default SeeMore;
