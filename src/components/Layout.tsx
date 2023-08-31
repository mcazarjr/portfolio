import { Outlet } from "react-router-dom";

import PortHeader from "./PortHeader";

const Layout = () => {
  return (
    <>
      <div className="">
        <PortHeader />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
