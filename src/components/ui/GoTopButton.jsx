import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowUpShort } from "react-icons/bs";

export const GotTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0, visibility: "hidden" }}
          animate={{ scale: 1.1, opacity: 1, visibility: "visible" }}
          exit={{ scale: 0, opacity: 0, visibility: "hidden" }}
          className="fixed bottom-10 right-10 z-40 lg:bottom-20 lg:right-20"
        >
          <div
            className="flex cursor-pointer items-center justify-center rounded-full border border-main-500 bg-main-500/30 p-3 text-white shadow backdrop-blur transition-transform duration-300"
            onClick={ScrollToTop}
          >
            <BsArrowUpShort className="h-6 w-6" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
