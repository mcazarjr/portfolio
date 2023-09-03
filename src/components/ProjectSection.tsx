import { forwardRef } from "react";

import { Component1Icon, ExternalLinkIcon } from "@radix-ui/react-icons";

const ProjectSection = forwardRef<HTMLElement, {}>((props, ref) => {
  console.log(props);
  return (
    <section
      id="projects"
      ref={ref}
      className="2xl:container xl:w-11/12 xl:mx-auto py-8 md:py-16 px-4"
    >
      <div className="grid place-items-center pb-8">
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

      <article className="p-4 rounded-lg shadow-md shadow-accent flex flex-col gap-4 md:relative">
        <div className="border-b pb-4 md:border-b-0 md:pb-0 md:absolute md:top-4 md:right-4 md:w-7/12">
          <img
            src="images/NeatO_Desktop.png"
            alt="NeatO Desktop"
            className="md:rounded-lg md:pb-2 md:shadow-md"
          />
        </div>
        <div className="flex flex-col gap-4 md:z-50 md:w-7/12 md:pt-10 md:pb-6">
          <div className="">
            <h3 className="text-secondary font-semibold font-mono">
              Recent Project
            </h3>
            <h4 className="font-semibold font-mono text-2xl flex items-center gap-2">
              Neat-O
              <a
                href="https://neatoapp.live"
                target="_blank"
                className=""
              >
                <ExternalLinkIcon
                  className="text-primary hover:text-secondary transition-all duration-200 ease-in-out"
                  width="20"
                  height="20"
                />
              </a>
            </h4>
          </div>
          <p className="md:bg-secondary md:p-4 md:rounded-lg md:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            error dignissimos quia quasi. Doloremque possimus sint pariatur
            quibusdam, atque quam excepturi, iure nisi voluptatibus magni unde
            sed repudiandae omnis modi mollitia corrupti iusto magnam fugiat
            veritatis officia molestiae? Ipsum aspernatur ratione adipisci
            consequatur nostrum enim modi perspiciatis voluptas, sed impedit!
          </p>
          <div className="flex gap-2 flex-wrap">
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm">
              React
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm">
              Redux
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm">
              Node.js
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm">
              Express.js
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm">
              MongoDB
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm">
              Mongoose
            </p>
            <p className="rounded-lg border px-2 border-accent text-slate-400 text-sm">
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
        </div>
      </article>
    </section>
  );
});

export default ProjectSection;
