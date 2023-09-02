import PortHeader from "./PortHeader";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col gap-10 md:gap-0">
        <PortHeader />
        <HeroSection />
        <AboutSection />
      </div>
    </>
  );
};

export default Layout;
