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
    <ReactIcon />,
    <NodeJSIcon />,
    <ExpressIcon />,
    <MongoDBIcon />,
    <JSIcon />,
    <TSIcon />,
    <GithubIcon />,
    <ReduxIcon />,
    <TailwindIcon />,
    <SocketIOIcon />,
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
            <div
              key={index}
              className="rounded-full cursor-pointer p-4 shadow-md shadow-slate-300 grid place-items-center hover:shadow-accent"
            >
              {icon}
            </div>
          ))}
        </div>
      </section>
    </>
  );
});

export default SkillsSection;
