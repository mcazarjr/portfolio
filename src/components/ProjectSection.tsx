import { forwardRef, useRef } from "react";
import { motion, useScroll } from "framer-motion";

import { Component1Icon, ExternalLinkIcon } from "@radix-ui/react-icons";

const ProjectSection = forwardRef<HTMLElement, {}>(({}, sectionRef) => {
  const articleRef = useRef<HTMLElement>(null);
  const article2Ref = useRef<HTMLElement>(null);

  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionRef as any,
    offset: ["0 1", "0.1 1"],
  });

  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["0 1", "0.5 1"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: article2Ref,
    offset: ["0 1", "0.5 1"],
  });

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      style={{ scale: sectionScrollProgress, opacity: sectionScrollProgress }}
      className="2xl:container xl:w-11/12 xl:mx-auto px-4 grid gap-12"
    >
      <div className="grid place-items-center">
        <h2 className="uppercase font-bold font-mono text-xl flex gap-4 items-center text-primary lg:text-2xl">
          <span className="text-black">
            <Component1Icon />
          </span>
          Portfolio
          <span className="text-black">
            <Component1Icon />
          </span>
        </h2>
      </div>

      <motion.article
        ref={articleRef}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        className="px-4 rounded-lg flex flex-col gap-4 md:grid md:grid-cols-5"
      >
        <img
          src="images/NeatO_w2048px.webp"
          alt="NeatO Desktop"
          className="border-b pb-4 
          md:rounded-lg md:pb-2 md:shadow-md md:shadow-accent md:border-b-0 md:col-start-[3] md:col-end-6 md:row-start-1 md:row-end-2"
        />
        <div
          className="flex flex-col gap-4
        md:pt-10 md:pb-6 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-4"
        >
          <div className="">
            <h3 className="text-primary font-semibold font-mono">
              Recent Project
            </h3>
            <h4 className="font-semibold font-mono text-2xl flex items-center gap-2">
              Neat-O
            </h4>
          </div>
          <div className="md:bg-primary md:p-4 md:rounded-lg md:text-white md:max-w-xl grid gap-4">
            <p>
              As a term project from Langara, our dedicated team of three
              designers and three developers successfully transformed the
              concept of Streamline Cleaning into a minimal viable product in
              just 12 weeks.
            </p>
            <p>
              This innovative app aims to modernize the cleaning industry with a
              highly efficient management system that simplifies task handling
              and staff scheduling.
            </p>
            <p>
              With features like the Workload Tracker, our app helps you manage
              tasks effectively, even in the most challenging environments.
              Designed to foster tight communication between managers and
              housekeepers, Streamline Cleaning is your go-to tool for
              streamlining operations and bringing modern efficiency to every
              sweep, scrub, and polish.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap md:max-w-xl">
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm bg-white">
              React
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm bg-white">
              Redux
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm bg-white">
              Node.js
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm bg-white">
              Express.js
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm bg-white">
              MongoDB
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm bg-white">
              Mongoose
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm bg-white">
              React Router Dom
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm">
              Tailwind
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm">
              Socket.io
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm">
              AWS
            </p>
          </div>
          <a
            href="https://neatoapp.live"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-primary border border-primary w-fit rounded-lg p-2 hover:text-white hover:bg-primary transition-all duration-200 ease-in-out "
          >
            Live Demo
            <ExternalLinkIcon
              className="text-primary group-hover:text-white"
              width="20"
              height="20"
            />
          </a>
        </div>
      </motion.article>

      <motion.article
        ref={article2Ref}
        style={{ scale: scrollYProgress2, opacity: scrollYProgress2 }}
        className="px-4 pt-8 rounded-lg flex flex-col gap-4 md:grid md:grid-cols-5"
      >
        <img
          src="images/CoCare.webp"
          alt="NeatO Desktop"
          className="border-b pb-4 
          md:rounded-lg md:pb-2 md:shadow-md md:shadow-accent md:border-b-0 md:col-start-[1] md:col-end-4 md:row-start-1 md:row-end-2"
        />
        <div
          className="flex flex-col gap-4
        md:pt-10 md:pb-6 md:row-start-1 md:row-end-2 md:col-start-3 md:col-end-6 md:items-end"
        >
          <div className="">
            <h3 className="text-primary font-semibold font-mono">
              Recent Project
            </h3>
            <h4 className="font-semibold font-mono text-2xl flex items-center gap-2">
              CoCare
            </h4>
          </div>

          <div className="md:bg-primary md:p-4 md:rounded-lg md:text-white md:max-w-xl grid gap-4">
            <p>
              In a focused 12-week period at Langara, our talented team of four
              designers and three developers came together to create CoCare—an
              app crafted by dedicated parents and individuals who understand
              the challenges of balancing work and family life.
            </p>
            <p>
              CoCare is designed to offer a safe, nurturing environment for
              children after school, empowering them to reach their full
              potential.
            </p>
            <p>
              We firmly believe that by fostering community collaboration, we
              can provide the highest level of care and support for our
              children. Tailored to meet the unique needs of working parents,
              CoCare ensures that each child feels valued and supported,
              allowing parents to focus on work without compromising on family
              well-being.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap md:max-w-xl md:justify-end">
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm bg-white">
              HTMl
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm bg-white">
              CSS
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm bg-white">
              Javascript
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm bg-white">
              Firebase
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm bg-white">
              Google Maps API
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm bg-white">
              Service Worker
            </p>
          </div>
          <a
            href="https://cocare-d7fc8.web.app/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-primary border border-primary w-fit rounded-lg p-2 hover:text-white hover:bg-primary transition-all duration-200 ease-in-out "
          >
            Live Demo
            <ExternalLinkIcon
              className="text-primary group-hover:text-white"
              width="20"
              height="20"
            />
          </a>
        </div>
      </motion.article>
    </motion.section>
  );
});

export default ProjectSection;
