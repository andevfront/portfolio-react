import { technologies } from "../../data";
import { TechIcon } from "./TechIcon";

export const TechIconsList = () => {
  return (
    <div className="my-4 flex flex-wrap gap-6">
      {technologies.map((tech, index) => (
        <TechIcon key={index} {...tech} />
      ))}
    </div>
  );
};
