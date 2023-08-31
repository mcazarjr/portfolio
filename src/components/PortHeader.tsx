import { useState } from "react";
import { NavLink } from "react-router-dom";

import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

// "underline text-l text-primary font-sans"
// md:flex md:justify-center md:gap-8 md:py-4

const PortHeader = () => {
  const [menuFlag, setMenuFlag] = useState(false);

  const activeMenuStyle = "underline text-l";

  const handleMenuClick = (e: any) => {
    if (e.target.name === "menuButton") {
      setMenuFlag(!menuFlag);
      return;
    }

    setMenuFlag(false);
  };

  return (
    <>
      <header className={`relative text-xl text-white w-full bg-primary`}>
        <button
          onClick={handleMenuClick}
          name="menuButton"
          className={`
          transition-all bg-primary flex justify-center p-4 z-50`}
        >
          {menuFlag ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </button>
        <nav
          className={`${
            menuFlag
              ? "bg-primary h-screen w-screen z-40 absolute"
              : "-translate-x-full absolute"
          }
          transition-all flex flex-col gap-10 pt-10 pl-4 pb-4`}
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeMenuStyle : "")}
            onClick={handleMenuClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeMenuStyle : "")}
            onClick={handleMenuClick}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? activeMenuStyle : "")}
            onClick={handleMenuClick}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeMenuStyle : "")}
            onClick={handleMenuClick}
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default PortHeader;
