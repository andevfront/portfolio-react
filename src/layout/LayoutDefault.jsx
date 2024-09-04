import { useState } from "react";
import { Footer, GotTopButton, Header, MobileMenu } from "../components";
import {
  AboutSection,
  ContactSection,
  HomeSection,
  PortfolioSection,
  ResumeSection,
} from "../views";

export const LayoutDefault = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    document.body.classList.add("overflow-hidden");
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    document.body.classList.remove("overflow-hidden");
    setIsMenuOpen(false);
  };

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
      <Footer />
    </>
  );
};
