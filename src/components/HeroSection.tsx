import { ArrowRightIcon } from "@radix-ui/react-icons";

const HeroSection = () => {
  const heroImageURL = "images/mscj2.png";
  const heroDescription = "Full Stack Developer";

  return (
    <div
      className="px-4 bg-white flex flex-col items-center justify-center pt-10 gap-8
      lg:grid lg:grid-cols-2 lg:bg-red-100 lg:pt-24"
      id="home"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-xl font-mono flex flex-col font-semibold gap-2 lg:text-left">
            <span>Hello 👋, I'm</span>
            <span className="text-3xl">
              Meraldo <span className="text-primary">Cazar JR.</span>
            </span>
          </p>
          <p className="font-serif flex gap-2 items-end justify-center lg:justify-start">
            A
            <span className="font-semibold text-2xl font-sans">
              {heroDescription}
            </span>
          </p>
        </div>
        <div className="flex gap-6">
          <button
            className="bg-primary px-6 py-3 rounded-lg text-white font-semibold uppercase
          hover:bg-secondary
          transition-all duration-200 ease-in-out"
          >
            Hire me
          </button>
          <button
            className="font-semibold uppercase text-primary px-6 py-3 border rounded-lg border-primary
          hover:bg-secondary hover:text-white hover:border-white
          transition-all duration-200 ease-in-out"
          >
            View my work
          </button>
        </div>
      </div>
      <div className="grid justify-items-center gap-2 md:flex md:justify-center">
        <div className="border-4 border-secondary rounded-full py-4">
          <img
            src={heroImageURL}
            alt="John Doe"
            className="rounded-full w-72 border-4 border-accent2 translate-x-3"
          />
        </div>

        {/* Short Phrases */}
        <div className="grid gap-2 md:flex md:flex-col md:justify-center md:gap-4 -translate-x-6">
          <div className="grid grid-cols-[auto_1fr] gap-3 border border-primary rounded-lg h-[4rem] w-[10rem] items-center overflow-hidden">
            <div className="pl-3 h-full flex items-center pr-2 border-r border-r-primary -skew-x-[10deg] bg-white overflow-hidden -translate-x-1">
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
          <div className="grid grid-cols-[auto_1fr] gap-3 border border-primary rounded-lg h-[4rem] w-[10rem] items-center overflow-hidden">
            <div className="pl-3 h-full flex items-center pr-2 border-r border-r-primary -skew-x-[10deg] bg-white overflow-hidden -translate-x-1">
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
          <div className="grid grid-cols-[auto_1fr] gap-3 border border-primary rounded-lg h-[4rem] w-[10rem] items-center overflow-hidden">
            <div className="pl-3 h-full flex items-center pr-2 border-r border-r-primary -skew-x-[10deg] bg-white overflow-hidden -translate-x-1">
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
    </div>
  );
};

export default HeroSection;
