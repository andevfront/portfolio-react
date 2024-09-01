import { Footer, Header } from "../components";
import {
  AboutSection,
  ContactSection,
  HomeSection,
  PortfolioSection,
  ResumeSection,
} from "../views";

export const LayoutDefault = () => {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <ResumeSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};
