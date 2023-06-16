import { twMerge } from "tailwind-merge";

const ServiceCard = ({ title, img, className }) => {
  return (
    <div
      className={twMerge(
        "flex cursor-pointer flex-col justify-between gap-6 rounded-lg border-[3px] border-primary px-6 py-4 transition-transform hover:scale-105",
        className
      )}
    >
      <img src={img} alt={title + " img"} className="min-h-[70%]" />
      <h3 className="text-xl text-highlight-yellow drop-shadow-sm">{title}</h3>
    </div>
  );
};

export default ServiceCard;
