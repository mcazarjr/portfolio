import PortHeader from "./PortHeader";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";

const Layout = () => {
  return (
    <>
      <div className="2xl:container xl:w-11/12 xl:mx-auto">
        <PortHeader />
        <HeroSection />
        <AboutSection />
      </div>
    </>
  );
};

export default Layout;
