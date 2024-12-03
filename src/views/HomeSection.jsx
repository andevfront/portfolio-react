import { ReactTyped } from "react-typed";
import { IoLogoGithub } from "react-icons/io5";
import { HeroSvg } from "../assets/images";

export const HomeSection = () => {
  return (
    <section className="flex min-h-screen bg-[#0A1527]" id="home">
      <div className="container m-auto grid grid-cols-6 gap-6 px-6">
        <div className="col-span-6 md:col-span-3">
          <h1 className="mb-3 text-4xl font-black uppercase text-white">
            Ayelén Andrade
          </h1>
          <ReactTyped
            className="text-xl font-semibold text-white"
            strings={["Desarrolladora Web Front-end "]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <p className="mb-6 mt-5">
            Soy una desarrolladora web frontend con experiencia en tecnologías
            como HTML, CSS y JavaScript, especialmente enfocado en frameworks
            modernos como React y herramientas como Tailwind CSS.
            <br />
            Mi experiencia incluye la implementación de sitios responsivos,
            donde priorizo la claridad y legibilidad del código para facilitar
            el mantenimiento y la colaboración en equipo. También tengo
            habilidades en el manejo de APIs y la implementación de plugins.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/andevfront"
              className="transition-colors duration-300 hover:text-white"
              target="_blank"
            >
              <IoLogoGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="col-span-6 justify-self-center md:col-span-3">
          <figure className="h-96 animate-move-y">
            <img className="h-full" src={HeroSvg} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};
