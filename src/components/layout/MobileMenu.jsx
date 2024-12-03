import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { BsXLg, BsGithub } from "react-icons/bs";

export const MobileMenu = ({ isOpen, onClose }) => {
  const handleResize = ({ target }) => {
    if (target.innerWidth > 1023) {
      onClose();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween" }}
          className="fixed inset-0 z-50 flex h-screen w-screen bg-black/30"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.5 }}
            className="relative mr-auto flex h-full w-[288px] min-w-[250px] flex-col bg-[#0A1527]/90 shadow-lg backdrop-blur"
          >
            <button
              className="absolute right-5 top-5 p-[3px] text-white"
              onClick={onClose}
            >
              <BsXLg className="text-xl" />
            </button>
            <div className="my-auto flex flex-col items-center gap-10">
              <nav className="nav">
                <ul className="flex flex-col items-center gap-5 text-white">
                  <li>
                    <Link
                      className="relative cursor-pointer px-2 py-1 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-0 after:bg-main-500 after:transition-all after:duration-300 after:content-['']"
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={onClose}
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative cursor-pointer px-2 py-1 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-0 after:bg-main-500 after:transition-all after:duration-300 after:content-['']"
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={onClose}
                    >
                      Sobre mí
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative cursor-pointer px-2 py-1 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-0 after:bg-main-500 after:transition-all after:duration-300 after:content-['']"
                      activeClass="active"
                      to="resume"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={onClose}
                    >
                      Mi Curriculum
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative cursor-pointer px-2 py-1 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-0 after:bg-main-500 after:transition-all after:duration-300 after:content-['']"
                      activeClass="active"
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={onClose}
                    >
                      Portafolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative cursor-pointer px-2 py-1 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-0 after:bg-main-500 after:transition-all after:duration-300 after:content-['']"
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={onClose}
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex gap-5 text-white">
                <a href="https://github.com/andevfront" target="_blank">
                  <BsGithub className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
