import { useEffect } from "react";
import mixitup from "mixitup";

import "../assets/styles/mixitup.css";
import { ProyectList } from "../components";

export const PortfolioSection = () => {
  useEffect(() => {
    const mixer = mixitup(".mix-container", {
      selectors: {
        target: ".mix",
      },
      animation: {
        duration: 300,
      },
    });

    mixer.filter(".mix-all");
  }, []);

  return (
    <section className="bg-[#0D182E] py-36" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex items-center justify-center before:my-auto before:h-px before:w-[250px] before:bg-gradient-to-l before:from-main-500 before:to-[#333] before:content-[''] after:my-auto after:h-px after:w-[250px] after:bg-gradient-to-l after:from-[#333] after:to-main-500 after:content-['']">
          <h2 className="mx-5 whitespace-nowrap text-xl font-bold text-main-500">
            Portafolio
          </h2>
        </div>
        <ul className="mb-8 flex flex-wrap justify-center gap-x-3 font-bold text-white">
          <li
            className="relative cursor-pointer select-none px-2 py-1 transition-all duration-300 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-0 after:bg-main-500 after:transition-all after:duration-300 after:content-[''] hover:text-main-500 hover:after:w-full"
            data-filter=".mix-all"
          >
            Todos
          </li>
          <li
            className="relative cursor-pointer select-none px-2 py-1 transition-all duration-300 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-0 after:bg-main-500 after:transition-all after:duration-300 after:content-[''] hover:text-main-500 hover:after:w-full"
            data-filter=".mix-work"
          >
            Proyectos Laborales
          </li>
          <li
            className="relative cursor-pointer select-none px-2 py-1 transition-all duration-300 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-0 after:bg-main-500 after:transition-all after:duration-300 after:content-[''] hover:text-main-500 hover:after:w-full"
            data-filter=".mix-personal"
          >
            Proyectos Personales
          </li>
          <li
            className="relative cursor-pointer select-none px-2 py-1 transition-all duration-300 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-0 after:bg-main-500 after:transition-all after:duration-300 after:content-[''] hover:text-main-500 hover:after:w-full"
            data-filter=".mix-template"
          >
            Templates
          </li>
        </ul>
        <ProyectList />
      </div>
    </section>
  );
};
