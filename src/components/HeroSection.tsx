const HeroSection = () => {
  const heroGreeting = "Hi, ";
  const heroName = "I'm Meraldo Cazar Jr.";
  const heroImageURL = "images/me.jpg";
  const heroDescription =
    "An aspiring Web Developer, coming from a background in System Administration and Software Development.";

  return (
    <div className="px-4 pt-10 grid grid-rows-2 gap-10 place-items-center bg-white">
      <img
        src={heroImageURL}
        alt="John Doe"
        className="rounded-full border-4 border-secondary p-1 w-8/12"
      />
      <div className="self-start flex flex-col gap-6 text-center">
        <h1 className="text-xl font-mono">
          {heroGreeting} <span className="font-semibold">{heroName}</span>
        </h1>
        <p className="[text-wrap:balance] font-serif">{heroDescription}</p>
      </div>
    </div>
  );
};

export default HeroSection;
