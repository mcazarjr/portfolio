import { forwardRef } from "react";
import { motion, useScroll } from "framer-motion";

import {
  ReactIcon,
  NodeJSIcon,
  ExpressIcon,
  MongoDBIcon,
  JSIcon,
  TSIcon,
  GithubIcon,
  ReduxIcon,
  TailwindIcon,
  SocketIOIcon,
} from "../assets/Icons";

const SkillsSection = forwardRef<HTMLElement, {}>(({}, ref) => {
  const skillsIcon = [
    { comp: <ReactIcon />, compName: "React" },
    { comp: <NodeJSIcon />, compName: "NodeJS" },
    { comp: <ExpressIcon />, compName: "Express" },
    { comp: <MongoDBIcon />, compName: "MongoDB" },
    { comp: <JSIcon />, compName: "JavaScript" },
    { comp: <TSIcon />, compName: "TypeScript" },
    { comp: <GithubIcon />, compName: "GitHub" },
    { comp: <ReduxIcon />, compName: "Redux" },
    { comp: <TailwindIcon />, compName: "TailwindCSS" },
    { comp: <SocketIOIcon />, compName: "Socket.IO" },
  ];

  const { scrollYProgress } = useScroll({
    target: ref as any,
    offset: ["0 1", "0.5 1"],
  });

  return (
    <>
      <motion.section
        id="skills"
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        className="flex items-center px-4 flex-wrap"
      >
        <div className="2xl:container xl:w-11/12 md:mx-auto flex gap-6 flex-wrap justify-center">
          {skillsIcon.map((icon, index) => (
            <div
              className="grid place-items-center gap-2"
              key={index}
            >
              <div className="rounded-full cursor-pointer w-20 h-20 p-4 shadow-md shadow-slate-300 flex flex-col justify-center items-center hover:shadow-accent">
                {icon.comp}
              </div>
              <span>{icon.compName}</span>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
});

export default SkillsSection;
