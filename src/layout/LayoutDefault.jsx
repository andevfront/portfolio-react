import { Footer, Header } from "../components";
import { AboutSection, HomeSection } from "../views";

export const LayoutDefault = () => {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
};
