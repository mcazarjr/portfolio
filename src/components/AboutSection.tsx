import { forwardRef } from "react";

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  console.log(props);
  return (
    <section
      id="about"
      className="2xl:container xl:w-11/12 xl:mx-auto grid gap-6 px-4 place-items-center lg:grid-cols-2"
      ref={ref}
    >
      <div className="flex relative pr-4">
        <div className="w-full pb-16">
          <img
            src="https://picsum.photos/300"
            alt="John Doe"
            className="rounded-lg w-full"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-1/3">
          <img
            src="images/me.jpg"
            alt="Meraldo Cazar Jr."
            className="rounded-lg w-full"
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_auto] lg:grid-cols-1">
        <div>
          <h2 className="uppercase font-bold text-primary font-mono text-lg">
            About Me
          </h2>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptates voluptatibus
            exercitationem quos doloribus quod voluptate quas. Quisquam
            voluptatum, quibusdam, quia, quae voluptates voluptatibus
            exercitationem quos doloribus quod voluptate quas.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
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
          <div className="grid col-span-2">
            <span className="font-semibold uppercase tracking-tighter">
              Education
            </span>
            <div className="flex flex-col gap-2">
              <p className="grid">
                Web and Mobile Application Development and Design
                <span className="text-sm text-slate-400">
                  Langara College, Vancouver, BC, Canada
                </span>
              </p>
              <p className="grid">
                Bachelor of Science in Information Technology
                <span className="text-sm text-slate-400">
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
    </section>
  );
});

export default AboutSection;
