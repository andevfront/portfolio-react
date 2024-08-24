import { useEffect } from "react";
import mixitup from "mixitup";
import { BsEye, BsGithub } from "react-icons/bs";

import "../assets/styles/mixitup.css";

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
        <div className="mix-container grid grid-cols-12 gap-5">
          <div className="mix-all mix mix-personal col-span-12 flex h-[400px] flex-col overflow-hidden rounded-xl bg-[#101d37] sm:col-span-6 lg:col-span-4 xl:col-span-3">
            <figure>
              <img className="h-[180px] w-full object-cover" src="" alt="" />
              <figcaption className="my-2 px-4 text-xl font-bold text-white">
                Proyecto
              </figcaption>
              <figcaption className="line-clamp-5 px-4 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores id doloremque ut voluptatum, saepe iste ad cum
                consequuntur. Odio eum fuga quisquam ratione labore pariatur.
              </figcaption>
            </figure>
            <div className="mt-auto flex justify-center gap-10 p-4">
              <a
                href=""
                className="flex items-center gap-1 rounded-full border border-main-500 bg-main-500/30 px-4 py-1 text-white"
              >
                <BsEye />
                Ver
              </a>
              <a
                href=""
                className="flex items-center gap-1 rounded-full border border-main-500 bg-main-500/30 px-4 py-1 text-white"
              >
                <BsGithub />
                Repo
              </a>
            </div>
          </div>
          <div className="mix-all mix mix-work col-span-12 flex h-[400px] flex-col overflow-hidden rounded-xl bg-[#101d37] sm:col-span-6 lg:col-span-4 xl:col-span-3">
            <figure>
              <img className="h-[180px] w-full object-cover" src="" alt="" />
              <figcaption className="my-2 px-4 text-xl font-bold text-white">
                Proyecto
              </figcaption>
              <figcaption className="line-clamp-5 px-4 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores id doloremque ut voluptatum, saepe iste ad cum
                consequuntur. Odio eum fuga quisquam ratione labore pariatur.
              </figcaption>
            </figure>
            <div className="mt-auto flex justify-center gap-10 p-4">
              <a
                href=""
                className="flex items-center gap-1 rounded-full border border-main-500 bg-main-500/30 px-4 py-1 text-white"
              >
                <BsEye />
                Ver
              </a>
              <a
                href=""
                className="flex items-center gap-1 rounded-full border border-main-500 bg-main-500/30 px-4 py-1 text-white"
              >
                <BsGithub />
                Repo
              </a>
            </div>
          </div>
          <div className="mix-all mix mix-template col-span-12 flex h-[400px] flex-col overflow-hidden rounded-xl bg-[#101d37] sm:col-span-6 lg:col-span-4 xl:col-span-3">
            <figure>
              <img className="h-[180px] w-full object-cover" src="" alt="" />
              <figcaption className="my-2 px-4 text-xl font-bold text-white">
                Proyecto
              </figcaption>
              <figcaption className="line-clamp-5 px-4 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores id doloremque ut voluptatum, saepe iste ad cum
                consequuntur. Odio eum fuga quisquam ratione labore pariatur.
              </figcaption>
            </figure>
            <div className="mt-auto flex justify-center gap-10 p-4">
              <a
                href=""
                className="flex items-center gap-1 rounded-full border border-main-500 bg-main-500/30 px-4 py-1 text-white"
              >
                <BsEye />
                Ver
              </a>
              <a
                href=""
                className="flex items-center gap-1 rounded-full border border-main-500 bg-main-500/30 px-4 py-1 text-white"
              >
                <BsGithub />
                Repo
              </a>
            </div>
          </div>
          <div className="mix-all mix mix personal col-span-12 flex h-[400px] flex-col overflow-hidden rounded-xl bg-[#101d37] sm:col-span-6 lg:col-span-4 xl:col-span-3">
            <figure>
              <img className="h-[180px] w-full object-cover" src="" alt="" />
              <figcaption className="my-2 px-4 text-xl font-bold text-white">
                Proyecto
              </figcaption>
              <figcaption className="line-clamp-5 px-4 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores id doloremque ut voluptatum, saepe iste ad cum
                consequuntur. Odio eum fuga quisquam ratione labore pariatur.
              </figcaption>
            </figure>
            <div className="mt-auto flex justify-center gap-10 p-4">
              <a
                href=""
                className="flex items-center gap-1 rounded-full border border-main-500 bg-main-500/30 px-4 py-1 text-white"
              >
                <BsEye />
                Ver
              </a>
              <a
                href=""
                className="flex items-center gap-1 rounded-full border border-main-500 bg-main-500/30 px-4 py-1 text-white"
              >
                <BsGithub />
                Repo
              </a>
            </div>
          </div>
          <div className="mix-all mix mix-work col-span-12 flex h-[400px] flex-col overflow-hidden rounded-xl bg-[#101d37] sm:col-span-6 lg:col-span-4 xl:col-span-3">
            <figure>
              <img className="h-[180px] w-full object-cover" src="" alt="" />
              <figcaption className="my-2 px-4 text-xl font-bold text-white">
                Proyecto
              </figcaption>
              <figcaption className="line-clamp-5 px-4 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores id doloremque ut voluptatum, saepe iste ad cum
                consequuntur. Odio eum fuga quisquam ratione labore pariatur.
              </figcaption>
            </figure>
            <div className="mt-auto flex justify-center gap-10 p-4">
              <a
                href=""
                className="flex items-center gap-1 rounded-full border border-main-500 bg-main-500/30 px-4 py-1 text-white"
              >
                <BsEye />
                Ver
              </a>
              <a
                href=""
                className="flex items-center gap-1 rounded-full border border-main-500 bg-main-500/30 px-4 py-1 text-white"
              >
                <BsGithub />
                Repo
              </a>
            </div>
          </div>
          <div className="mix-all mix mix-template col-span-12 flex h-[400px] flex-col overflow-hidden rounded-xl bg-[#101d37] sm:col-span-6 lg:col-span-4 xl:col-span-3">
            <figure>
              <img className="h-[180px] w-full object-cover" src="" alt="" />
              <figcaption className="my-2 px-4 text-xl font-bold text-white">
                Proyecto
              </figcaption>
              <figcaption className="line-clamp-5 px-4 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores id doloremque ut voluptatum, saepe iste ad cum
                consequuntur. Odio eum fuga quisquam ratione labore pariatur.
              </figcaption>
            </figure>
            <div className="mt-auto flex justify-center gap-10 p-4">
              <a
                href=""
                className="flex items-center gap-1 rounded-full border border-main-500 bg-main-500/30 px-4 py-1 text-white"
              >
                <BsEye />
                Ver
              </a>
              <a
                href=""
                className="flex items-center gap-1 rounded-full border border-main-500 bg-main-500/30 px-4 py-1 text-white"
              >
                <BsGithub />
                Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
