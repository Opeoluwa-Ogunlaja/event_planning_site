import { twMerge } from "tailwind-merge";
import { Tilt } from "react-tilt";

const ServiceCard = ({ title, img, className, index = 1 }) => {
  return (
    <Tilt>
      <div
        className={twMerge(
          "mx-auto flex min-h-full cursor-pointer flex-col justify-between gap-6 rounded-lg border-[3px] border-primary bg-white px-6 py-4 shadow-md sm:shadow-lg transition-transform hover:scale-105 sm:mx-0",
          className
        )}
      >
        <img src={img} alt={title + " img"} className="min-h-[70%]" />
        <h3 className="text-xl text-highlight-yellow drop-shadow-sm">
          {title}
        </h3>
      </div>
    </Tilt>
  );
};

export default ServiceCard;
