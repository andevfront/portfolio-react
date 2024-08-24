import { Footer, Header } from "../components";
import {
  AboutSection,
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
      </main>
      <Footer />
    </>
  );
};
