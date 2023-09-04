import { forwardRef } from "react";

import {
  Component1Icon,
  EnvelopeClosedIcon,
  MobileIcon,
} from "@radix-ui/react-icons";

import { WhatsAppIcon } from "../assets/Icons";

const ContactSection = forwardRef<HTMLElement, {}>((props, ref) => {
  console.log(props);
  return (
    <section
      id="contact"
      ref={ref}
      className="2xl:container xl:w-11/12 xl:mx-auto px-4 grid gap-12"
    >
      <div className="grid place-items-center">
        <h2 className="font-mono text-primary font-bold flex gap-4 items-center text-xl uppercase lg:text-2xl">
          <span className="text-black">
            <Component1Icon />
          </span>
          Get in Touch
          <span className="text-black">
            <Component1Icon />
          </span>
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-8">
        <div className="flex flex-col gap-4 md:justify-center md:gap-12">
          <p className="text-center md:[text-wrap:balance]">
            I'm currently looking for opportunities. Send me a message, I'll try
            to get back to you as soon as possible.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:merlinmeraldo@gmail.com"
              className="group w-32 p-2 flex justify-center items-center gap-2 border border-primary rounded-md hover:text-white hover:bg-primary"
            >
              <EnvelopeClosedIcon
                width="20"
                height="20"
                className="text-primary group-hover:text-white"
              />
              Email
            </a>
            <a
              href="tel:+1-236-339-3611"
              className="group w-32 p-2 flex justify-center items-center gap-2 border border-primary rounded-md hover:text-white hover:bg-primary"
            >
              <MobileIcon
                width="20"
                height="20"
                className="text-primary group-hover:text-white"
              />
              Phone
            </a>
            <a
              href="tel:+1-236-339-3611"
              className="group w-32 p-2 flex justify-center items-center gap-2 border border-primary rounded-md hover:text-white hover:bg-primary text-primary"
            >
              <WhatsAppIcon
                className="w-5 h-5 fill-primary group-hover:fill-white"
                inner_fill="fill-white group-hover:fill-primary"
              />
              WhatsApp
            </a>
          </div>
        </div>
        <div className="grid place-items-center w-full gap-4">
          <span
            className="text-accent w-full grid grid-cols-[1fr_auto_1fr] place-items-center gap-4
            md:grid-rows-[1fr_auto_1fr] md:grid-cols-1 md:h-full
            before:content-[''] before:w-full before:h-[1px] before:bg-accent
            after:content-[''] after:w-full after:h-[1px] after:bg-accent
            md:before:w-[1px] md:before:h-full
            md:after:w-[1px] md:after:h-full
          "
          >
            OR
          </span>
        </div>
        <form className="flex flex-col gap-4 w-full">
          <div>
            <label
              htmlFor="name"
              className="sr-only"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full border border-primary rounded-md p-2"
              required={true}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="sr-only"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full border border-primary rounded-md p-2"
              required={true}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="sr-only"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="w-full border border-primary rounded-md p-2 h-44"
              required={true}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white rounded-md p-2 max-w-[10rem] self-end
            hover:bg-secondary transition-colors duration-300 ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
});

export default ContactSection;
