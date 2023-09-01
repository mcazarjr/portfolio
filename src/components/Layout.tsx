import { Outlet } from "react-router-dom";

import PortHeader from "./PortHeader";

const Layout = () => {
  return (
    <>
      <div className="2xl:container xl:w-11/12 xl:mx-auto">
        <PortHeader />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
