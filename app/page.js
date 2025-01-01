import BookingTable from "@/components/BookingTable/BookingTable";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/sidebar";
import TopMetricCards from "@/components/TopMetricCards/TopMetricCards";
import UserTable from "@/components/UserTable/UserTable";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="flex w-full">
        <Sidebar/>
        <div className="bg-[#f9fbff]  ml-[250px] container">
          <div className="p-4">
          <TopMetricCards/>
          <BookingTable/>
          <UserTable/>
          </div>
        </div>
      </div>
    </div>
  );
}
