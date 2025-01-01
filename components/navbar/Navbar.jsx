// ...existing code...
import Image from "next/image";
import bellIcon from "@/public/assets/notification-bing.svg";
import languageIcon from "@/public/assets/global.svg";
import profileImg from "@/public/assets/profile-img.svg";
import arrowDown from "@/public/assets/arrow-down.svg";

export default function Navbar() {
  return (
    <nav className="flex items-center  justify-between p-4 bg-white border-b border-[#efefef] text-white">
      {/* right content */}
      <div className="text-xl font-bold">MyLogo</div>
      {/* left content */}
      <div className="flex items-center gap-4">
        {/* bell icon */}
        <div>
          <Image
            src={bellIcon}
            alt="Notification Icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
        {/* langugage + curruncy btn */}
        <div className="w-[111px] h-10 p-2.5 bg-[#f2f2f2] rounded-[38px] justify-center items-center gap-1.5 inline-flex">
          <div className="text-[#081f2c] text-sm font-normal  flex items-center gap-2 leading-tight">
            <Image
              src={languageIcon}
              alt="global Icon"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            EN
          </div>
          <div className="h-3 w-px bg-[#B2BABE]" />
          <div className="text-[#081f2c] text-sm font-normal  leading-tight">
            USD
          </div>
        </div>
        {/* profile */}
        <div className="h-10 px-1.5 py-2.5 rounded-[144px] border-2 border-black flex-col justify-center items-start gap-2 inline-flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <Image
              className="w-8 h-8 rounded-full"
              src={profileImg}
              alt="Profile"
              width={32}
              height={32}
            />
            <div className="w-4 h-4 justify-center items-center flex">
            <Image
              src={arrowDown}
              alt="Profile"
              width={32}
              height={32}
            />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
// ...existing code...
