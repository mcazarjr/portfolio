import { forwardRef } from "react";
import { motion, useScroll } from "framer-motion";

const AboutSection = forwardRef<HTMLElement>(({}, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref as any,
    offset: ["0 1", "0.5 1"],
  });

  return (
    <motion.section
      id="about"
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="2xl:container xl:w-11/12 xl:mx-auto grid gap-6 px-4 place-items-center lg:grid-cols-2"
      ref={ref}
    >
      <div className="relative w-full md:container flex lg:justify-end lg:pr-12">
        <img
          src="images/DevWindow2.webp"
          alt="John Doe"
          className="rounded-lg w-full pb-16 md:pb-32 md:w-9/12"
        />
        <img
          src="images/me.jpg"
          alt="Meraldo Cazar Jr."
          className="absolute w-2/6 bottom-0 right-0 rounded-lg md:top-[50%] md:h-1/2 object-cover object-center lg:left-0 lg:top-[40%] lg:w-2/4 lg:h-3/5"
        />
      </div>
      <div className="place-self-start grid gap-4 md:grid-cols-[1fr_auto] lg:grid-cols-1">
        <div>
          <h2 className="uppercase font-bold text-primary font-mono text-lg">
            About Me
          </h2>
          <p className="leading-relaxed">
            With nearly a decade of professional experience in Information
            Technology, I've honed my skills across diverse roles such as System
            Administrator and Consumer Welfare Assistant. Specializing in a wide
            array of programming languages and tools, including HTML, CSS,
            Javascript, MySQL, C#, Java, and PHP, I bring meticulous attention
            to detail to every project I tackle.
          </p>
          <p className="leading-relaxed mt-2">
            Currently furthering my education in Web and Mobile App Design &
            Development at Langara College, I am deeply committed to continuous
            learning. My approach is team-oriented and agile, allowing me to
            adapt quickly to new challenges and collaborate effectively with
            colleagues. These traits make me a reliable and dynamic contributor
            to any project or team.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="col-span-2 grid gap-6 md:grid-cols-2 md:gap-0">
            <div className="grid">
              <span className="font-semibold uppercase tracking-tighter">
                Name
              </span>
              <span>Meraldo S. Cazar Jr.</span>
            </div>
            <div className="grid">
              <span className="font-semibold uppercase tracking-tighter">
                Email
              </span>
              <span>
                <a
                  href="mailto:meraldocazar@gmail.com"
                  className="hover:underline"
                >
                  meraldocazar@gmail.com
                </a>
              </span>
            </div>
          </div>
          <div className="grid col-span-2">
            <span className="font-semibold uppercase tracking-tighter">
              Education
            </span>
            <div className="flex flex-col gap-2">
              <p className="grid">
                Web and Mobile Application Development and Design
                <span className="text-sm text-slate-500">
                  Langara College, Vancouver, BC, Canada
                </span>
              </p>
              <p className="grid">
                Bachelor of Science in Information Technology
                <span className="text-sm text-slate-500">
                  Saint Louis University, Baguio City, Philippines
                </span>
              </p>
            </div>
          </div>
          <div className="grid">
            <span className="font-semibold uppercase tracking-tighter">
              Employment
            </span>
            <span>Open</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
});

export default AboutSection;
