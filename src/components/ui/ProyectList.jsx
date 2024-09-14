import { proyects } from "../../data/proyects";
import { ProyectCard } from "./ProyectCard";

export const ProyectList = () => {
  return (
    <div className="mix-container grid grid-cols-12 gap-5">
      {proyects.map((proyect, index) => (
        <ProyectCard key={index} {...proyect} />
      ))}
    </div>
  );
};
