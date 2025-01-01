import React from "react";
import Image from "next/image";
import searchIcon from "@/public/assets/siderbar/search.png";
import calendarIcon from "@/public/assets/table/Calendar.png";
import exportIcon from "@/public/assets/table/export.png";
import searchCommandIcon from "@/public/assets/table/search-command.png";
import dotsIcon from "@/public/assets/table/dots.png";

export default function TableHeader({header}) {
  return (
    <div className="h-[88px] px-6 py-3  flex justify-between items-center">
      {/* heading */}
      <div className="text-[#0f1728] text-lg font-medium font-['Poppins'] leading-7">
        Recent Bookings
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-[52px]">
          {/* search btn */}
          <div className="h-10 w-[450px] justify-between px-4 py-2 bg-[#f2f2f2] rounded-lg flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 relative">
                <Image
                  src={searchIcon}
                  alt="Search Icon"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <input
                type="text"
                placeholder="Search here..."
                className="bg-[#f2f2f2] text-[#898e95] text-sm font-normal font-['Inter'] leading-tight border-none outline-none"
              />
            </div>
            <div className="px-1.5 py-1 bg-[#ececec] rounded-md flex items-start gap-1.5 overflow-hidden">
              <div className="w-4 h-4 relative">
                <Image
                  src={searchCommandIcon}
                  alt="Search Command Icon"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="text-[#898e95] text-sm font-normal font-['Poppins'] leading-none">
                F
              </div>
            </div>
          </div>
          {/* calendar and export btn */}
          <div className="flex items-start gap-2.5">
            <button className="px-6 py-2.5 bg-white rounded-lg border border-[#cfd4dc] flex items-center gap-2.5">
              <div className="text-black text-sm font-normal font-['Poppins']">
                Today
              </div>
              <div className="w-5 h-5 relative">
                <Image
                  src={calendarIcon}
                  alt="Calendar Icon"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </button>
            <button className="px-6 py-2.5 bg-black rounded-lg flex items-center gap-2.5">
              <div className="text-white text-sm font-normal font-['Poppins']">
                Export
              </div>
              <div className="w-[14.50px] h-[14.50px] flex items-center">
                <Image
                  src={exportIcon}
                  alt="Export Icon"
                  width={20}
                  height={20}
                />
              </div>
            </button>
          </div>
        </div>
        {/* dropdown btn */}
        <div className="flex items-center gap-3">
          <div className="flex-col items-start inline-flex">
            <div className="w-5 h-5 relative overflow-hidden">
              <Image
                src={dotsIcon}
                alt="Dots Icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}