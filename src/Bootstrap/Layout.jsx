import React from "react";
import BootstrapNav from "./BootstrapNav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <BootstrapNav />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
