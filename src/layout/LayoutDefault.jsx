import { Footer, Header } from "../components";
import { HomeSection } from "../views";

export const LayoutDefault = () => {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
      </main>
      <Footer />
    </>
  );
};
