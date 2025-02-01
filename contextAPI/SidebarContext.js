"use client"; // Mark this as a Client Component

import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context for the sidebar state
const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Effect to set the default sidebar state based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setIsSidebarVisible(true); // Open sidebar for larger screens
      } else {
        setIsSidebarVisible(false); // Close sidebar for smaller screens
      }
    };

    // Set initial state on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SidebarContext.Provider
      value={{ isSidebarVisible, toggleSidebar, setIsSidebarVisible }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the sidebar context
export const useSidebar = () => {
  return useContext(SidebarContext);
};