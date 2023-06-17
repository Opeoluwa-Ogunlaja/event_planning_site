import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const BookBtn = ({ className, onClick }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (onClick && typeof onClick == "function") {
      onClick(e);
      return;
    }

    navigate("book");
  };

  return (
    <button
      onClick={handleClick}
      className={twMerge(
        "w-fit rounded-lg bg-primary-blue-grad px-12 py-3 font-bold text-white shadow-lg shadow-primary transition-transform hover:scale-105",
        className
      )}
    >
      Book an Event
    </button>
  );
};

export default BookBtn;
