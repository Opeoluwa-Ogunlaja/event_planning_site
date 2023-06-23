import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";

const ServiceCard = ({ title, img, className, index = 1 }) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "", 0.5 * index, 0.75)}
        className={twMerge(
          "mx-auto flex min-h-full cursor-pointer flex-col justify-between gap-6 rounded-lg border-[3px] border-primary bg-white px-6 py-4 shadow-md sm:shadow-lg transition-transform hover:scale-105 sm:mx-0",
          className
        )}
      >
        <img src={img} alt={title + " img"} className="min-h-[70%]" />
        <h3 className="text-xl text-highlight-yellow drop-shadow-sm">
          {title}
        </h3>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
