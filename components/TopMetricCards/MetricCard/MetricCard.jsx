import React from "react";
import arrowUp from "@/public/assets/metric-cards/ArrowFatLinesUp.png";
import Image from "next/image";
import TinyAreaChart from "./GraphComponent/graph";

function MetricCard({ heading, percentage, count,graphData,graphColor }) {
  return (
    <div className="w-full px-5 py-6 bg-white rounded-lg border border-[#eaecf0] flex-col justify-center items-start gap-3.5 inline-flex">
        {/* first line- dropdown and pernectage numner */}
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="px-[8px] py-[7.25px] bg-white rounded-md shadow-[0px_0.7249999642372131px_1.4499999284744263px_0px_rgba(16,24,40,0.05)] border border-[#cfd4dc] justify-center items-center gap-[5.80px] flex overflow-hidden">
          <select className="text-[#344053] text-[12.15px] font-semibold font-['Poppins'] leading-[14.50px] bg-white border-none outline-none">
            <option>Last Month</option>
            <option>Last Week</option>
            <option>Last Year</option>
          </select>
        </div>
        <div className=" text-[#24bc73] text-xs font-normal font-['Poppins'] flex">
            <Image src={arrowUp} height={16} width={16} alt="arrowUp" />
            {percentage}
          </div>
      </div>
        {/* heading and count number */}
      <div className="gap-3 justify-between items-center flex w-full">
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <div className="flex-col justify-start items-start gap-1 flex">
            <div className="text-[#042124] text-base font-medium font-['Poppins']">
              {heading}
            </div>
            <div className="text-black text-[26px] font-bold font-['Poppins'] ">
              {count}
            </div>
          </div>
          <div className="text-[#616161] text-sm font-medium font-['Poppins']">
            Overall last month
          </div>
        </div>
        {/* graph */}
        <div className="w-[145px]">
         <TinyAreaChart graphData={graphData} graphColor={graphColor}  />
        </div>
      </div>
    </div>
  );
}

export default MetricCard;
