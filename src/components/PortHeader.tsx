import { Link } from "react-router-dom";

const PortHeader = () => {
 return (
  <>
   <header className="w-full bg-fuchsia-300 border-4">
    <nav className="flex justify-around">
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/projects">Projects</Link>
     <Link to="/contact">Contact</Link>
    </nav>
   </header>
  </>
 );
};

export default PortHeader;
