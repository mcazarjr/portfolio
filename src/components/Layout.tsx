import { useRef } from "react";

import PortHeader from "./PortHeader";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";

const Layout = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const scrollToSection = (sectionID: string) => {
    let selectedRef = null;
    switch (sectionID) {
      case "about":
        selectedRef = aboutRef;
        break;
      case "projects":
        selectedRef = projectsRef;
        break;
      case "contact":
        selectedRef = contactRef;
        break;
      default:
        selectedRef = homeRef;
    }

    if (selectedRef && selectedRef.current) {
      const { id, offsetTop } = selectedRef.current;
      if (id === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-10 md:gap-0">
        <PortHeader
          onClickEvent={scrollToSection}
          sectionRefs={sectionRefs}
        />
        <HeroSection ref={homeRef} />
        <AboutSection ref={aboutRef} />
        <SkillsSection />
        <ProjectSection ref={projectsRef} />
        <ContactSection ref={contactRef} />
      </div>
    </>
  );
};

export default Layout;
