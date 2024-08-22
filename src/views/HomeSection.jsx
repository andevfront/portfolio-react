import { ReactTyped } from "react-typed";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            itaque distinctio, neque assumenda, eius quaerat repellat
            perspiciatis ex dolor sunt recusandae. Et tempore possimus corporis
            id repudiandae? Aspernatur, eaque minima.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              <IoLogoInstagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              <IoLogoGithub className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              <IoLogoLinkedin className="h-6 w-6" />
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
