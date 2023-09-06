import { useEffect, useState } from "react";

import {
  ModulzLogoIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";

interface Props {
  onClickEvent: (sectionID: string) => void;
}

const PortHeader = (props: Props) => {
  const [menuFlag, setMenuFlag] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("home");

  const menuItems = [
    { name: "home", label: "Home" },
    { name: "about", label: "About" },
    { name: "projects", label: "Projects" },
    { name: "contact", label: "Contact" },
  ];

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveMenu(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px 0px 0px 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    menuItems.forEach((item) => {
      const section = document.getElementById(item.name);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.name);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [menuItems]);

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
      props.onClickEvent(menuName);
    }
  };

  return (
    <>
      <header
        className={`2xl:container xl:w-11/12 xl:mx-auto xl:px-0
           text-xl pt-4 pb-2 lg:pb-0 px-4 sticky top-0 z-50 bg-white
           lg:flex lg:justify-between
           `}
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
          lg:static lg:transform-none lg:flex-row lg:border-0 lg:p-0 lg:bg-transparent
          `}
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name}`}
              className={`${
                activeMenu === item.name ? activeMenuStyle : inactiveMenuStyle
              } ${defaultMenuStyle}`}
              onClick={handleMenuClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
};

export default PortHeader;
