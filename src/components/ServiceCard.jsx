import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { fadeIn } from '../utils/motion'
import { Tilt } from "react-tilt";

const ServiceCard = ({ title, img, className, index = 1 }) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn('right', '', 0.5 * index, 0.75)}
        className={twMerge(
          "flex cursor-pointer min-h-full bg-white flex-col justify-between gap-6 mx-auto sm:mx-0 rounded-lg border-[3px] border-primary px-6 py-4 transition-transform hover:scale-105",
          className
        )}>
          <img src={img} alt={title + " img"} className="min-h-[70%]" />
          <h3 className="text-xl text-highlight-yellow drop-shadow-sm">{title}</h3>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
