import React from "react";
import Image from "next/image";
import searchIcon from "@/public/assets/siderbar/search.png";
import dashboardIcon from "@/public/assets/siderbar/dashboard.png";
import propertiesIcon from "@/public/assets/siderbar/properties.png";
import userManagmentIcon from "@/public/assets/siderbar/people.png";
import bookingsIcon from "@/public/assets/siderbar/bookings.png";
import settingIcon from "@/public/assets/siderbar/setting.svg";
import policyIcon from "@/public/assets/siderbar/policy.png";
import logoutIcon from "@/public/assets/siderbar/logout.png";
import disputeIcon from "@/public/assets/siderbar/dispute.png";

function Sidebar() {
  return ( 
    <div className="h-full w-full md:w-[250px] px-3 pt-3 pb-8  bg-white border-r border-[#efefef] flex-col justify-between items-start inline-flex overflow-y-auto fixed top-0 left-0 z-10 custom-scrollbar">
      <div className="self-stretch h-auto md:h-[672px] pt-[15px] flex-col justify-center items-center gap-11 flex">
        {/*header- Logo */}
        <div className="text-center text-black text-[24px] md:text-[41.09px] font-bold font-['Poppins'] leading-[57.32px]">
          Efandex
        </div>
        {/* search bar */}
        <div className="h-14 p-4 bg-neutral-100 flex-col justify-center items-start gap-2.5 flex">
          <div className="w-full md:w-[186px] h-6 justify-start items-center gap-4 inline-flex">
            <div className="w-6 h-6 relative">
              <Image
                src={searchIcon}
                alt="Search Icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="w-[146px] text-[#2a2a2e] text-base font-normal font-['Open Sans'] leading-snug">
              Search...
            </div>
          </div>
        </div>
        {/* menu items */}
        <ul className="flex-col justify-start items-start gap-6 flex">
          <li className="p-4 bg-black rounded-lg flex-col justify-start items-start gap-2.5 flex">
            <div className="w-full md:w-[186px] h-6 justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <Image
                  src={dashboardIcon}
                  alt="Dashboard"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-white text-base font-normal font-['Poppins'] leading-snug">
                Dashboard
              </div>
            </div>
          </li>
          <li className="p-4 rounded-lg flex-col justify-start items-start gap-2.5 flex">
            <div className="w-full md:w-[186px] h-6 justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 relative">
                <Image
                  src={propertiesIcon}
                  alt="Properties"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-[#09090a] text-base font-normal font-['Poppins'] leading-snug">
                Properties
              </div>
            </div>
          </li>
          <li className="p-4 rounded-lg flex-col justify-start items-start gap-2.5 flex">
            <div className="w-full md:w-[186px] h-6 justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <Image
                  src={userManagmentIcon}
                  alt="User Management"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-[#09090a] text-base font-normal font-['Poppins'] leading-snug">
                User Managment
              </div>
            </div>
          </li>
          <li className="p-4 rounded-lg flex-col justify-start items-start gap-2.5 flex">
            <div className="w-full md:w-[186px] h-6 justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <Image
                  src={bookingsIcon}
                  alt="Bookings"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-[#09090a] text-base font-normal font-['Poppins'] leading-snug">
                Bookigns
              </div>
            </div>
          </li>
          <li className="p-4 rounded-lg flex-col justify-start items-start gap-2.5 flex">
            <div className="w-full md:w-[186px] h-6 justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 relative">
                <Image
                  src={disputeIcon}
                  alt="Dispute Centre"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-[#09090a] text-base font-normal font-['Poppins'] leading-snug">
                Dispute Centre
              </div>
            </div>
          </li>
          <li className="p-4 rounded-lg flex-col justify-start items-start gap-2.5 flex">
            <div className="w-full md:w-[186px] h-6 justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <Image
                  src={settingIcon}
                  alt="Settings"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-[#09090a] text-base font-normal font-['Poppins'] leading-snug">
                Settings
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* footer-privacy and logout */}
      <div className="self-stretch h-auto lg:pt-4 max-xl:pt-0  flex-col justify-start items-start gap-11 flex">
        <ul className="flex-col justify-start items-start gap-6 flex">
          <li className="p-3 rounded-lg flex-col justify-start items-start gap-2.5 flex">
            <div className="w-full md:w-[186px] h-6 justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <Image
                  src={policyIcon}
                  alt="Privacy Policy"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-[#09090a] text-base font-normal font-['Poppins'] leading-snug">
                Privacy Policy
              </div>
            </div>
          </li>
          <li className="self-stretch h-14 bg-[#ea4335] rounded-lg flex-col justify-start items-start gap-2 flex">
            <div className="p-4 rounded-lg flex-col justify-start items-start gap-2.5 flex">
              <div className="w-full md:w-[186px] h-6 justify-start items-center gap-4 inline-flex">
                <div className="w-6 h-6 relative">
                  <Image src={logoutIcon} alt="Logout" width={24} height={24} />
                </div>
                <div className="text-white text-base font-normal font-['Open Sans'] leading-snug">
                  Logout
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;