import { useState } from "react";
import { Link } from "react-router-dom";

import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

// "underline text-l text-primary font-sans"
// md:flex md:justify-center md:gap-8 md:py-4

const PortHeader = () => {
 const [menuFlag, setMenuFlag] = useState(false);

 return (
  <>
   <header className="bg-accent xl:container mx-auto">
    <button
     onClick={() => setMenuFlag(!menuFlag)}
     className="flex justify-center p-4"
    >
     {menuFlag ? <Cross1Icon /> : <HamburgerMenuIcon />}
    </button>
    <nav className={menuFlag ? "" : "hidden"}>
     <Link
      to="/"
      className=""
     >
      Home
     </Link>
     <Link
      to="/about"
      className=""
     >
      About
     </Link>
     <Link
      to="/projects"
      className=""
     >
      Projects
     </Link>
     <Link
      to="/contact"
      className=""
     >
      Contact
     </Link>
    </nav>
   </header>
  </>
 );
};

export default PortHeader;
