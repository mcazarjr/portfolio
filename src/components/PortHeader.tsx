import { Link } from "react-router-dom";

const PortHeader = () => {
 return (
  <>
   <header className="xl:container mx-auto">
    <nav className="flex justify-center gap-8 py-4">
     <Link
      to="/"
      className="underline text-l text-primary font-sans"
     >
      Home
     </Link>
     <Link
      to="/about"
      className="underline text-l text-primary"
     >
      About
     </Link>
     <Link
      to="/projects"
      className="underline text-l text-primary"
     >
      Projects
     </Link>
     <Link
      to="/contact"
      className="underline text-l text-primary"
     >
      Contact
     </Link>
    </nav>
   </header>
  </>
 );
};

export default PortHeader;
