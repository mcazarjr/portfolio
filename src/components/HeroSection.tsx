import { forwardRef } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { ParticleContainer } from "./ParticleContainer";
import { TypeAnimation } from "react-type-animation";

interface Props {
  onClickEvent: (sectionID: string) => void;
}

const HeroSection = forwardRef<HTMLElement, Props>((props, ref) => {
  const heroImageURL = "images/mscj_w512px.webp";

  return (
    <section
      id="home"
      ref={ref}
      className="2xl:container xl:w-11/12 xl:mx-auto px-4 flex flex-col items-center justify-center gap-8 pt-12 relative
      lg:grid lg:grid-cols-2 lg:h-[90vh] lg:pt-0"
    >
      <ParticleContainer />
      <div className="flex flex-col gap-8 lg:gap-12">
        <div className="flex flex-col gap-4 text-center lg:gap-6">
          <p className="text-xl font-mono flex flex-col font-semibold gap-2 lg:text-left lg:gap-6">
            <span className="lg:text-xl xl:text-2xl">Hello 👋, I'm</span>
            <span className="text-3xl lg:text-4xl xl:text-5xl">
              Meraldo <span className="text-primary">Cazar JR.</span>
            </span>
          </p>
          <p className="font-serif flex gap-2 items-end justify-center lg:justify-start lg:text-lg xl:text-2xl">
            A
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                " ",
                1000,
                " Full Stack Developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="font-semibold text-2xl font-sans xl:text-3xl"
            />
          </p>
        </div>
        <div className="flex gap-6">
          <button
            className="bg-primary px-6 py-3 rounded-lg text-white font-semibold uppercase
          hover:bg-secondary
            transition-all duration-200 ease-in-out"
            onClick={() => props.onClickEvent("contact")}
          >
            Hire me
          </button>
          <button
            className="font-semibold uppercase text-primary px-6 py-3 border rounded-lg border-primary
          hover:bg-secondary hover:text-white hover:border-white
            transition-all duration-200 ease-in-out"
            onClick={() => props.onClickEvent("projects")}
          >
            View my work
          </button>
        </div>
      </div>
      <div className="grid justify-items-center gap-2 md:flex md:justify-center">
        <div className="border-4 border-secondary rounded-full py-4 -translate-x-1 md:translate-x-0">
          <img
            src={heroImageURL}
            alt="John Doe"
            className="rounded-full w-72 border-4 border-accent2 translate-x-3 lg:w-96"
          />
        </div>

        {/* Short Phrases */}
        <div className="grid gap-2 md:flex md:flex-col md:justify-center md:gap-4 md:-translate-x-6">
          <div className="grid grid-cols-[auto_1fr] gap-3 border border-primary rounded-lg h-[4rem] w-[10rem] items-center overflow-hidden bg-white">
            <div className="pl-3 h-full flex items-center pr-2 border-r border-r-primary -skew-x-[10deg] overflow-hidden -translate-x-1">
              <ArrowRightIcon
                className="text-primary"
                width="30"
                height="30"
              />
            </div>
            <p className="uppercase font-bold [text-wrap:balance] text-sm select-none">
              Attention to-detail
            </p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-3 border border-primary rounded-lg h-[4rem] w-[10rem] items-center overflow-hidden bg-white">
            <div className="pl-3 h-full flex items-center pr-2 border-r border-r-primary -skew-x-[10deg] overflow-hidden -translate-x-1">
              <ArrowRightIcon
                className="text-primary"
                width="30"
                height="30"
              />
            </div>
            <p className="uppercase font-bold [text-wrap:balance] text-sm select-none">
              Team Oriented
            </p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-3 border border-primary rounded-lg h-[4rem] w-[10rem] items-center overflow-hidden bg-white">
            <div className="pl-3 h-full flex items-center pr-2 border-r border-r-primary -skew-x-[10deg] overflow-hidden -translate-x-1">
              <ArrowRightIcon
                className="text-primary"
                width="30"
                height="30"
              />
            </div>
            <p className="uppercase font-bold [text-wrap:balance] text-sm select-none">
              Agile
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
