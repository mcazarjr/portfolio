import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ModulzLogoIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";

// "underline text-l text-primary font-sans"
// md:flex md:justify-center md:gap-8 md:py-4

const PortHeader = () => {
  const [menuFlag, setMenuFlag] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const activeMenuStyle = "text-primary";
  const inactiveMenuStyle = "hover:text-secondary";
  const defaultMenuStyle =
    "text-l no-underline pb-2 border-b border-b-accent2 last:border-b-0 lg:border-0";

  const handleMenuClick = (e: any) => {
    if (e.target.name === "menuButton") {
      setMenuFlag(!menuFlag);
      return;
    }

    setMenuFlag(false);

    // Get the type of html element
    const elementType = e.target.nodeName.toLowerCase();
    if (elementType === "a") {
      const menuName = e.target.innerText.toLowerCase();
      setActiveMenu(menuName);
    }
  };

  return (
    <>
      <header
        className={`text-xl p-4 relative lg:static lg:flex lg:justify-between lg:px-0`}
      >
        <div className="flex justify-between items-center">
          <div>
            <ModulzLogoIcon
              className="text-primary"
              width="30"
              height="30"
            />
          </div>
          <button
            onClick={handleMenuClick}
            name="menuButton"
            className={`
          flex justify-center p-2 border-primary border rounded-md lg:hidden`}
          >
            {menuFlag ? (
              <Cross1Icon
                width="20"
                height="20"
                className="text-primary"
              />
            ) : (
              <HamburgerMenuIcon
                width="20"
                height="20"
                className="text-primary"
              />
            )}
          </button>
        </div>
        <nav
          className={`${menuFlag ? "translate-y-0" : "-translate-y-72"}
          flex flex-col gap-4 pt-4 px-4 font-semibold absolute bg-white border border-accent2 left-2 right-2 mt-1
          motion-safe:transition-all motion-safe:ease-in-out motion-safe:duration-500
          motion-reduce:transition-all motion-reduce:ease-in-out motion-reduce:duration-500
          lg:static lg:transform-none lg:flex-row lg:border-0 lg:p-0
          `}
        >
          <Link
            to="/"
            className={`${
              activeMenu === "home" ? activeMenuStyle : inactiveMenuStyle
            } ${defaultMenuStyle}
            `}
            onClick={handleMenuClick}
          >
            Home
          </Link>
          <Link
            to="#about"
            className={`${
              activeMenu === "about" ? activeMenuStyle : inactiveMenuStyle
            } ${defaultMenuStyle}  
            `}
            onClick={handleMenuClick}
          >
            About
          </Link>
          <Link
            to="#projects"
            className={`${
              activeMenu === "projects" ? activeMenuStyle : inactiveMenuStyle
            } ${defaultMenuStyle}  
            `}
            onClick={handleMenuClick}
          >
            Projects
          </Link>
          <Link
            to="#contact"
            className={`${
              activeMenu === "contact" ? activeMenuStyle : inactiveMenuStyle
            } ${defaultMenuStyle}  
            `}
            onClick={handleMenuClick}
          >
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
};

export default PortHeader;
