import { useEffect, useState } from "react";
import {
  Footer,
  GotTopButton,
  Header,
  Loader,
  MobileMenu,
} from "../components";
import {
  AboutSection,
  ContactSection,
  HomeSection,
  PortfolioSection,
  ResumeSection,
} from "../views";

export const LayoutDefault = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    document.body.classList.add("overflow-hidden");
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    document.body.classList.remove("overflow-hidden");
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Header onOpen={openMenu} />
      <main>
        <HomeSection />
        <AboutSection />
        <ResumeSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <GotTopButton />
      <Loader isLoading={isLoading} />
      <Footer />
    </>
  );
};
