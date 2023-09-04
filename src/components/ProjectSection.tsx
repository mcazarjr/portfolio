import { forwardRef } from "react";

import { Component1Icon, ExternalLinkIcon } from "@radix-ui/react-icons";

const ProjectSection = forwardRef<HTMLElement, {}>((props, ref) => {
  console.log(props);
  return (
    <section
      id="projects"
      ref={ref}
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

      <article className="px-4 rounded-lg flex flex-col gap-4 md:grid md:grid-cols-5">
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
          <p className="md:bg-primary md:p-4 md:rounded-lg md:text-white md:max-w-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            error dignissimos quia quasi. Doloremque possimus sint pariatur
            quibusdam, atque quam excepturi, iure nisi voluptatibus magni unde
            sed repudiandae omnis modi mollitia corrupti iusto magnam fugiat
            veritatis officia molestiae? Ipsum aspernatur ratione adipisci
            consequatur nostrum enim modi perspiciatis voluptas, sed impedit!
          </p>
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
      </article>

      <article className="px-4 pt-8 rounded-lg flex flex-col gap-4 md:grid md:grid-cols-5">
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
              Neat-O
            </h4>
          </div>
          <p className="md:bg-primary md:p-4 md:rounded-lg md:text-white md:max-w-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            error dignissimos quia quasi. Doloremque possimus sint pariatur
            quibusdam, atque quam excepturi, iure nisi voluptatibus magni unde
            sed repudiandae omnis modi mollitia corrupti iusto magnam fugiat
            veritatis officia molestiae? Ipsum aspernatur ratione adipisci
            consequatur nostrum enim modi perspiciatis voluptas, sed impedit!
          </p>
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
      </article>
    </section>
  );
});

export default ProjectSection;
