import { motion } from "framer-motion";
import { proyects } from "../../data/proyects";
import { fadeUp } from "../../helpers";
import { ProyectCard } from "./ProyectCard";

export const ProyectList = () => {
  return (
    <motion.div
      className="mix-container grid grid-cols-12 gap-5"
      initial="initial"
      whileInView="animate"
      variants={fadeUp}
      viewport={{
        once: true,
      }}
    >
      {proyects.map((proyect, index) => (
        <ProyectCard key={index} {...proyect} />
      ))}
    </motion.div>
  );
};
