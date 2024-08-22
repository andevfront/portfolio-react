import { FiDownload } from "react-icons/fi";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { ProfileImg } from "../assets/images";
import { calculateAge } from "../helpers";

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
          <div className="col-span-6 sm:col-span-3">
            <div className="flex flex-wrap gap-12">
              <figure className="relative z-[6] h-fit w-[150px] flex-shrink-0 before:absolute before:left-[16px] before:top-[-16px] before:-z-[5] before:h-full before:w-full before:border-[5px] before:border-main-500 before:content-[''] xl:w-[250px]">
                <img className="w-full object-cover" src={ProfileImg} alt="" />
              </figure>
              <div>
                <h3 className="text-lg font-bold text-white">
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
          </div>
          <div className="col-span-6 sm:col-span-3">
            <h3 className="text-lg font-bold text-white">
              Tecnologías y herramientas
            </h3>
            <div className="my-4 flex flex-wrap gap-6">
              <div className="group flex flex-col items-center gap-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E34F26] transition-shadow duration-300 ease-in-out group-hover:shadow-[0_0_10px_#E34F26]">
                  <FaHtml5 className="h-8 w-8 text-white" />
                </div>
                <span>HTML</span>
              </div>
              <div className="group flex flex-col items-center gap-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1572B6] transition-shadow duration-300 ease-in-out group-hover:shadow-[0_0_10px_#1572B6]">
                  <FaCss3Alt className="h-8 w-8 text-white" />
                </div>
                <span>CSS</span>
              </div>
              <div className="group flex flex-col items-center gap-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F7DF1E] transition-shadow duration-300 ease-in-out group-hover:shadow-[0_0_10px_#F7DF1E]">
                  <IoLogoJavascript className="h-8 w-8 text-white" />
                </div>
                <span>Javascript</span>
              </div>
              <div className="group flex flex-col items-center gap-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#06B6D4] transition-shadow duration-300 ease-in-out group-hover:shadow-[0_0_10px_#06B6D4]">
                  <RiTailwindCssFill className="h-8 w-8 text-white" />
                </div>
                <span>TailwindCSS</span>
              </div>
              <div className="group flex flex-col items-center gap-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#61DAFB] transition-shadow duration-300 ease-in-out group-hover:shadow-[0_0_10px_#61DAFB]">
                  <FaReact className="h-8 w-8 text-white" />
                </div>
                <span>React</span>
              </div>
              <div className="group flex flex-col items-center gap-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#764ABC] transition-shadow duration-300 ease-in-out group-hover:shadow-[0_0_10px_#764ABC]">
                  <SiRedux className="h-8 w-8 text-white" />
                </div>
                <span>Redux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
