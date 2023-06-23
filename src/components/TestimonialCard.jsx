import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { fadeIn } from "../utils/motion";

export const TestimonialCard = ({
  name,
  img,
  className,
  review,
  index = 1,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "", 0.5 * index, 0.75)}
      className={twMerge(
        "mx-auto flex h-full min-h-[300px] cursor-pointer flex-col items-center gap-2 rounded-lg bg-[rgb(255,244,233)] py-4 text-center shadow-xl transition-transform hover:scale-105 sm:mx-0",
        className
      )}
    >
      <div className="mx-auto aspect-square w-20 rounded-full border-2 border-primary shadow-inner sm:w-28 sm:border-[6px]">
        <img
          src={img}
          alt={name + " img"}
          className="aspect-square w-full rounded-full shadow-inner"
        />
      </div>
      <h3 className="text-xl text-highlight-blue font-bold drop-shadow-sm">{name}</h3>
      <p className="mx-auto mt-4 max-w-[25ch] text-dark opacity-95">{review}</p>
    </motion.div>
  );
};
