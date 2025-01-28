"use client";

import React, { useState } from "react";
import Image from "next/image";
import searchIcon from "@/public/assets/siderbar/search.png";
import dashboardLightIcon from "@/public/assets/siderbar/dashboard-light.svg";
import dashboardDarkIcon from "@/public/assets/siderbar/dasboard-dark.svg";
import propertiesIconDark from "@/public/assets/siderbar/properties-dark.svg";
import propertiesIconlight from "@/public/assets/siderbar/properties-light.svg";
import userManagmentIconDark from "@/public/assets/siderbar/user-dark.svg";
import userManagmentIconLight from "@/public/assets/siderbar/user-light.svg";
import bookingsIconDark from "@/public/assets/siderbar/booking-dark.svg";
import bookingsIconLight from "@/public/assets/siderbar/booking-light.svg";
import settingIconDark from "@/public/assets/siderbar/setting-dark.svg";
import settingIconLight from "@/public/assets/siderbar/setting-light.svg";
import policyIconDark from "@/public/assets/siderbar/privacy-dark.svg";
import policyIconLight from "@/public/assets/siderbar/privacy-light.svg";
import logoutIcon from "@/public/assets/siderbar/logout.png";
import disputeIconDark from "@/public/assets/siderbar/dispute-dark.svg";
import disputeIconLight from "@/public/assets/siderbar/dispute-light.svg";
import barIcon from "@/public/assets/siderbar/bars-solid.svg";
import crossIcon from "@/public/assets/siderbar/xmark-solid.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const isActive = (href) => pathname === href;

  return (
    <div className="h-full flex">
      {/* Sidebar */}
      <div
        className={`h-full px-3 pt-3 pb-8 bg-white border-r border-[#efefef] flex-col justify-between items-start inline-flex overflow-y-auto fixed top-0 left-0 z-10 custom-scrollbar transition-all duration-300 ${
          isSidebarVisible ? "w-[250px]" : "w-[80px]"
        }`}
      >
        {/* Toggle Icon */}
        <div
          className={`p-4 cursor-pointer z-20 transition-all duration-300`}
          onClick={toggleSidebar}
        >
          {isSidebarVisible ? (
            <Image src={crossIcon} alt="Close" width={24} height={24} />
          ) : (
            <Image src={barIcon} alt="Open" width={24} height={24} />
          )}
        </div>
        <div className="self-stretch h-auto md:h-[672px] flex-col justify-center items-center gap-11 flex">
          {/*header- Logo */}
          <div
            className={`text-center text-black text-[24px] md:text-[41.09px] font-bold font-['Poppins'] leading-[57.32px] ${
              !isSidebarVisible && "text-3xl"
            }`}
          >
            {isSidebarVisible ? "Efandex" : "E"}
          </div>
          {/* Search bar */}
          <div role="button"
            className={`h-14 p-4 bg-neutral-100 flex items-center rounded-lg ${
              !isSidebarVisible && "w-12 p-2"
            }`}
            onClick={() => {
              setIsSidebarVisible(true);
            }}
          >
            <div
              className={`w-full flex items-center ${
                isSidebarVisible ? "w-[186px]" : ""
              }`}
            >
              <div className="relative w-6 h-6 flex-shrink-0">
                <Image
                  src={searchIcon}
                  alt="Search Icon"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              {isSidebarVisible && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-[146px] ml-4 text-[#2a2a2e] text-base font-normal font-['Open Sans'] leading-snug bg-transparent outline-none"
                />
              )}
            </div>
          </div>

          {/* menu items */}
          <ul className="flex-col justify-start items-start gap-6 flex">
            {/* dashboard */}
            <Link href="/" className="w-full">
              <li
                className={`p-4 w-full rounded-lg flex-col justify-start items-start gap-2.5 flex ${
                  isActive("/") ? "bg-black" : ""
                }`}
              >
                <div
                  className={`w-full ${
                    isSidebarVisible ? "w-[186px]" : ""
                  } h-6 justify-start items-center gap-4 inline-flex`}
                >
                  <div className="w-6 h-6 justify-center items-center flex ">
                    {isActive("/") ? (
                      <Image
                        src={dashboardLightIcon}
                        alt="Dashboard"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        src={dashboardDarkIcon}
                        alt="Dashboard"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                  <div
                    className={`text-base font-normal font-['Poppins'] leading-snug ${
                      !isSidebarVisible && "hidden"
                    } ${isActive("/") ? "text-white" : "text-[#09090a]"}`}
                  >
                    Dashboard
                  </div>
                </div>
              </li>
            </Link>
            {/* properties */}
            <Link href="/properties" className="w-full">
              <li
                className={`p-4 w-full rounded-lg flex-col justify-start items-start gap-2.5 flex ${
                  isActive("/properties") ? "bg-black" : ""
                }`}
              >
                <div
                  className={`w-full ${
                    isSidebarVisible ? "w-[186px]" : ""
                  } h-6 justify-start items-center gap-4 inline-flex`}
                >
                  <div className="w-6 h-6 relative">
                    {isActive("/properties") ? (
                      <Image
                        src={propertiesIconlight}
                        alt="Properties"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        src={propertiesIconDark}
                        alt="Properties"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                  <div
                    className={`text-base font-normal font-['Poppins'] leading-snug ${
                      !isSidebarVisible && "hidden"
                    } ${
                      isActive("/properties") ? "text-white" : "text-[#09090a]"
                    }`}
                  >
                    Properties
                  </div>
                </div>
              </li>
            </Link>
            {/* user managment */}
            <Link href="/user-managment" className="w-full">
              <li
                className={`p-4 w-full rounded-lg flex-col justify-start items-start gap-2.5 flex ${
                  isActive("/user-managment") ? "bg-black" : ""
                }`}
              >
                <div
                  className={`w-full ${
                    isSidebarVisible ? "w-[186px]" : ""
                  } h-6 justify-start items-center gap-4 inline-flex`}
                >
                  <div className="w-6 h-6 justify-center items-center flex">
                    {isActive("/user-managment") ? (
                      <Image
                        src={userManagmentIconLight}
                        alt="User Management"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        src={userManagmentIconDark}
                        alt="User Management"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                  <div
                    className={`text-base font-normal font-['Poppins'] leading-snug ${
                      !isSidebarVisible && "hidden"
                    } ${
                      isActive("/user-managment")
                        ? "text-white"
                        : "text-[#09090a]"
                    }`}
                  >
                    User Managment
                  </div>
                </div>
              </li>
            </Link>
            {/* bookings */}
            <Link href="/bookings" className="w-full">
              <li
                className={`p-4 w-full rounded-lg flex-col justify-start items-start gap-2.5 flex ${
                  isActive("/bookings") ? "bg-black" : ""
                }`}
              >
                <div
                  className={`w-full ${
                    isSidebarVisible ? "w-[186px]" : ""
                  } h-6 justify-start items-center gap-4 inline-flex`}
                >
                  <div className="w-6 h-6 justify-center items-center flex">
                    {isActive("/bookings") ? (
                      <Image
                        src={bookingsIconLight}
                        alt="Bookings"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        src={bookingsIconDark}
                        alt="Bookings"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                  <div
                    className={`text-base font-normal font-['Poppins'] leading-snug ${
                      !isSidebarVisible && "hidden"
                    } ${
                      isActive("/bookings") ? "text-white" : "text-[#09090a]"
                    }`}
                  >
                    Bookings
                  </div>
                </div>
              </li>
            </Link>
            {/* dispute center */}
            <Link href="/dispute-center" className="w-full">
              <li
                className={`p-4 w-full rounded-lg flex-col justify-start items-start gap-2.5 flex ${
                  isActive("/dispute-center") ? "bg-black" : ""
                }`}
              >
                <div
                  className={`w-full ${
                    isSidebarVisible ? "w-[186px]" : ""
                  } h-6 justify-start items-center gap-4 inline-flex`}
                >
                  <div className="w-6 h-6 relative">
                    {isActive("/dispute-center") ? (
                      <Image
                        src={disputeIconLight}
                        alt="Dispute Centre"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        src={disputeIconDark}
                        alt="Dispute Centre"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                  <div
                    className={`text-base font-normal font-['Poppins'] leading-snug ${
                      !isSidebarVisible && "hidden"
                    } ${
                      isActive("/dispute-center")
                        ? "text-white"
                        : "text-[#09090a]"
                    }`}
                  >
                    Dispute Centre
                  </div>
                </div>
              </li>
            </Link>
            {/* settings */}
            <Link href="/settings" className="w-full">
              <li
                className={`p-4 w-full rounded-lg flex-col justify-start items-start gap-2.5 flex ${
                  isActive("/settings") ? "bg-black" : ""
                }`}
              >
                <div
                  className={`w-full ${
                    isSidebarVisible ? "w-[186px]" : ""
                  } h-6 justify-start items-center gap-4 inline-flex`}
                >
                  <div className="w-6 h-6 justify-center items-center flex">
                    {isActive("/settings") ? (
                      <Image
                        src={settingIconLight}
                        alt="Settings"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        src={settingIconDark}
                        alt="Settings"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                  <div
                    className={`text-base font-normal font-['Poppins'] leading-snug ${
                      !isSidebarVisible && "hidden"
                    } ${
                      isActive("/settings") ? "text-white" : "text-[#09090a]"
                    }`}
                  >
                    Settings
                  </div>
                </div>
              </li>
            </Link>
          </ul>
        </div>

        {/* footer-privacy and logout */}
        <div className="self-stretch h-auto lg:pt-4 max-xl:pt-0 flex-col justify-start items-start gap-11 flex">
          <ul className="flex-col w-full justify-start items-start gap-6 flex">
            {/* privacy */}
            <Link href="/privacy-policy" className="w-full">
              <li
                className={`p-4 w-full rounded-lg flex-col justify-start items-start gap-2.5 flex ${
                  isActive("/privacy-policy") ? "bg-black" : ""
                }`}
              >
                <div
                  className={` ${
                    isSidebarVisible ? "w-[186px]" : ""
                  } h-6 justify-start items-center gap-4 inline-flex`}
                >
                  <div className="w-6 h-6 justify-center items-center ">
                    {isActive("/privacy-policy") ? (
                      <Image
                        src={policyIconLight}
                        alt="Privacy Policy"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        src={policyIconDark}
                        alt="Privacy Policy"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                  <div
                    className={`text-base font-normal font-['Poppins'] leading-snug ${
                      !isSidebarVisible && "hidden"
                    } ${
                      isActive("/privacy-policy")
                        ? "text-white"
                        : "text-[#09090a]"
                    }`}
                  >
                    Privacy Policy
                  </div>
                </div>
              </li>
            </Link>
            <li className="w-full h-14 bg-[#ea4335] rounded-lg flex-col justify-start items-start gap-2 flex">
              <div className="p-4 rounded-lg flex-col justify-start items-start gap-2.5 flex">
                <div
                  className={`w-full ${
                    isSidebarVisible ? "w-[186px]" : ""
                  } h-6 justify-start items-center gap-4 inline-flex`}
                >
                  <div className="w-6 h-6 relative">
                    <Image
                      src={logoutIcon}
                      alt="Logout"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div
                    className={`text-white text-base font-normal font-['Open Sans'] leading-snug ${
                      !isSidebarVisible && "hidden"
                    }`}
                  >
                    Logout
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
