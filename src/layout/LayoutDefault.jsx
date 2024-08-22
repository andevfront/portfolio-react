import { Footer, Header } from "../components";
import { AboutSection, HomeSection, ResumeSection } from "../views";

export const LayoutDefault = () => {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <ResumeSection />
      </main>
      <Footer />
    </>
  );
};
