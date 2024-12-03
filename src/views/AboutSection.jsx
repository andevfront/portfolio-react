import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { ProfileImg } from "../assets/images";
import { calculateAge, fadeLeft, fadeRight } from "../helpers";
import { TechIconsList } from "../components";

export const AboutSection = () => {
  return (
    <section className="bg-[#0D182E] py-36" id="about">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex items-center justify-center before:my-auto before:h-px before:w-[250px] before:bg-gradient-to-l before:from-main-500 before:to-[#333] before:content-[''] after:my-auto after:h-px after:w-[250px] after:bg-gradient-to-l after:from-[#333] after:to-main-500 after:content-['']">
          <h2 className="mx-5 whitespace-nowrap text-xl font-bold text-main-500">
            Sobre mí
          </h2>
        </div>
        <div className="grid grid-cols-6 gap-6">
          <motion.div
            className="col-span-6 sm:col-span-3"
            initial="initial"
            whileInView="animate"
            variants={fadeRight}
            viewport={{
              once: true,
            }}
          >
            <div className="flex flex-wrap gap-12">
              <figure className="relative z-[6] h-fit w-[150px] flex-shrink-0 before:absolute before:left-[16px] before:top-[-16px] before:-z-[5] before:h-full before:w-full before:border-[5px] before:border-main-500 before:content-[''] xl:w-[250px]">
                <img className="w-full object-cover" src={ProfileImg} alt="" />
              </figure>
              <div>
                <h3 className="text-[20px] font-bold text-white">
                  Información personal
                </h3>
                <ul className="mt-4">
                  <li className="mb-2">
                    Nombre:
                    <span className="ml-3 text-white">Ayelén Andrade</span>
                  </li>
                  <li className="mb-2">
                    Edad:
                    <span className="ml-3 text-white">
                      {calculateAge("1996-11-14")}
                    </span>
                  </li>
                  <li className="mb-2">
                    Teléfono:
                    <span className="ml-3 text-white">+54 2284673568</span>
                  </li>
                  <li className="mb-2">
                    Email:
                    <span className="ml-3 text-white">
                      andrade.dev@outlook.com
                    </span>
                  </li>
                  <li className="mb-2">
                    Idioma:
                    <span className="ml-3 text-white">Español</span>
                  </li>
                  <li className="mb-2">
                    Nacionalidad:
                    <span className="ml-3 text-white">Argentina</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="mt-2 inline-flex items-center gap-3 rounded-full border border-main-500 bg-main-500/30 px-7 py-3 font-bold text-white"
                >
                  Descargar CV
                  <FiDownload className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="col-span-6 sm:col-span-3"
            initial="initial"
            whileInView="animate"
            variants={fadeLeft}
            viewport={{
              once: true,
            }}
          >
            <h3 className="text-[20px] font-bold text-white">
              Tecnologías y herramientas
            </h3>
            <TechIconsList />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
