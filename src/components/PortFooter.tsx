import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FacebbokIcon, MCLogo } from "../assets/Icons";

/*
  Footer Area
 */

const PortFooter = () => {
  return (
    <footer className="bg-primary text-white grid place-items-center gap-8 py-6">
      <div className="flex items-center gap-2 justify-center">
        <MCLogo className="fill-current text-white w-8 h-8" />
        <span className="text-xl font-semibold font-mono">mcdev</span>
      </div>
      <div className="flex gap-8">
        <a
          href="https://fb.com/mscj.dev"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FacebbokIcon className="fill-current text-white w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/mscjr"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInLogoIcon
            width="24"
            height="24"
          />
        </a>
        <a
          href="https://github.com/mcazarjr"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubLogoIcon
            width="24"
            height="24"
          />
        </a>
      </div>
      <div>
        <p>
          All rights reserved © 2023,
          <span className="font-bold"> Meraldo Cazar JR.</span>
        </p>
      </div>
    </footer>
  );
};

export default PortFooter;
