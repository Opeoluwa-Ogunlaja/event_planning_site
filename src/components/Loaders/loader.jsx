import { twMerge } from "tailwind-merge";
import "./loaders.scss";

const Loader = ({ className, stroke }) => {
  return (
    <div
      className={twMerge(`loader aspect-square`, className)}
      style={{ borderWidth: stroke, borderTopWidth: stroke }}
    ></div>
  );
};

export default Loader;
