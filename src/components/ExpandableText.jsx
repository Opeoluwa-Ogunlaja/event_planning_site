import { twMerge } from "tailwind-merge";
import { useToggle } from "../hooks/useToggle";

const ExpandableText = ({ children, minCharacters, className }) => {
  const [expanded, toggleExpanded] = useToggle(false);

  if (children.length < minCharacters)
    return <p className={`${className}`}>{children}</p>;

  const minified = () => (
    <>
      {children.substring(0, minCharacters)}{" "}.
      <span className="text-highlight-blue">Read more...</span>
    </>
  );

  return (
    <p
      className={twMerge(className, `cursor-pointer`)}
      onClick={() => toggleExpanded()}
    >
      {expanded ? (
        <>
          {children}{" "}
          <span className="text-highlight-blue">
            {" "}.
            ...Read less
          </span>
        </>
      ) : (
        <>{minified()}</>
      )}
    </p>
  );
};

export default ExpandableText;
