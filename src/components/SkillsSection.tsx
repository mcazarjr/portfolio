import { forwardRef } from "react";

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

const SkillsSection = forwardRef<HTMLElement, {}>((props, ref) => {
  console.log(props);

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

  return (
    <>
      <section
        id="skills"
        ref={ref}
        className="flex items-center px-4 flex-wrap"
      >
        <div className="2xl:container xl:w-11/12 md:mx-auto flex gap-6 flex-wrap justify-center">
          {skillsIcon.map((icon, index) => (
            <div className="grid place-items-center gap-2">
              <div
                key={index}
                className="rounded-full cursor-pointer w-20 h-20 p-4 shadow-md shadow-slate-300 flex flex-col justify-center items-center hover:shadow-accent"
              >
                {icon.comp}
              </div>
              <span>{icon.compName}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
});

export default SkillsSection;
