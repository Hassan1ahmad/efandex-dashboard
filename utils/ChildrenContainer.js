"use client"; // Mark this as a Client Component

import { useSidebar } from "@/contextAPI/SidebarContext";
import React from "react";

function ChildrenContainer({ children }) {
  const { isSidebarVisible } = useSidebar(); // Access sidebar state

  return (
    <div
      className={`bg-[#f9fbff]  ${
        isSidebarVisible ? "sideBarOpen" : "sideBarClose"
      } w-full transition-all duration-300`}
    >
      {children}
    </div>
  );
}

export default ChildrenContainer;