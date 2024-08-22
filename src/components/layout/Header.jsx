import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export const Header = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${isSticky ? "h-[72px]" : ""} sticky top-0 -z-[1] bg-[#0A1527]`}
      ></div>
      <header
        className={`${isSticky ? "fixed top-0 w-full bg-[#0A1527]/60 backdrop-blur" : "relative"} z-10 bg-[#0A1527] py-5`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link
            className="cursor-pointer text-2xl font-black text-main-500"
            to="home"
            smooth={true}
            duration={400}
          >
            Ayelén
          </Link>
          <nav>
            <ul className="flex items-center gap-7 font-semibold text-white">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  activeClass="active"
                  className="relative cursor-pointer transition-all duration-300 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-0 after:bg-main-500 after:transition-all after:duration-300 after:content-[''] hover:text-main-500 hover:after:w-full"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  activeClass="active"
                  className="relative cursor-pointer transition-all duration-300 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-0 after:bg-main-500 after:transition-all after:duration-300 after:content-[''] hover:text-main-500 hover:after:w-full"
                >
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link
                  to="resume"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  activeClass="active"
                  className="relative cursor-pointer transition-all duration-300 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-0 after:bg-main-500 after:transition-all after:duration-300 after:content-[''] hover:text-main-500 hover:after:w-full"
                >
                  Mi Curriculum
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  activeClass="active"
                  className="relative cursor-pointer transition-all duration-300 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-0 after:bg-main-500 after:transition-all after:duration-300 after:content-[''] hover:text-main-500 hover:after:w-full"
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  activeClass="active"
                  className="relative cursor-pointer transition-all duration-300 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-0 after:bg-main-500 after:transition-all after:duration-300 after:content-[''] hover:text-main-500 hover:after:w-full"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
