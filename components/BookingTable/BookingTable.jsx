"use client";
import React, { useState,useEffect } from "react";
import TableHeader from "../TableHeader/TableHeader";
import red_DotIcon from "@/public/assets/table/red_Dot.svg";
import yellow_DotIcon from "@/public/assets/table/yellow_Dot.svg";
import tickCircleIcon from "@/public/assets/table/tick-circle.svg";
import Image from "next/image";

const bookings = [
  {
    name: "Olivia Daddario",
    status: "Completed",
    price: "$633.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    name: "Jack Paul",
    status: "In Progress",
    price: "$231.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    name: "Mr Alexander",
    status: "Cancelled",
    price: "$260.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    name: "Arnold Archer",
    status: "Completed",
    price: "$900.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    name: " Daddario",
    status: "Completed",
    price: "$633.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    name: " Paul",
    status: "In Progress",
    price: "$231.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    name: "Mr ",
    status: "Cancelled",
    price: "$260.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    name: " Archer",
    status: "Completed",
    price: "$900.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    name: "Olivia ",
    status: "Completed",
    price: "$633.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    name: "Jack Paul",
    status: "In Progress",
    price: "$231.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    name: "Mr ",
    status: "Cancelled",
    price: "$260.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    name: "Arnold ",
    status: "Completed",
    price: "$900.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    name: " Daddario",
    status: "Completed",
    price: "$633.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    name: "Jack ",
    status: "In Progress",
    price: "$231.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    name: " Alexander",
    status: "Cancelled",
    price: "$260.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
  {
    name: "Arnold ",
    status: "Completed",
    price: "$900.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
  },
];


export default function BookingTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const PAGE_SIZE = 4;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentBookings = bookings.slice(startIndex, startIndex + PAGE_SIZE);
  const totalPages = Math.ceil(bookings.length / PAGE_SIZE);

  // Function to check if the device is small
  const checkDeviceSize = () => {
    setIsSmallDevice(window.innerWidth <= 500); // Adjust the breakpoint as needed
  };

  // Add event listener for window resize
  useEffect(() => {
    checkDeviceSize(); // Check on initial render
    window.addEventListener("resize", checkDeviceSize);
    return () => window.removeEventListener("resize", checkDeviceSize);
  }, []);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const renderPaginationButtons = () => {
    if (isSmallDevice) {
      // On small devices, show only the active page and the last page with dots in between
      return (
        <>
          <button
            onClick={() => setCurrentPage(1)}
            className={`px-2  mx-1 text-sm font-medium rounded ${
              currentPage === 1 ? "bg-black text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            1
          </button>
          {currentPage > 2 && <span className="mx-1">...</span>}
          {currentPage !== 1 && currentPage !== totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage)}
              className="px-2  mx-1 text-sm font-medium rounded bg-black text-white"
            >
              {currentPage}
            </button>
          )}
          {currentPage < totalPages - 1 && <span className="mx-1">...</span>}
          <button
            onClick={() => setCurrentPage(totalPages)}
            className={`px-2  mx-1 text-sm font-medium rounded ${
              currentPage === totalPages ? "bg-black text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {totalPages}
          </button>
        </>
      );
    } else {
      // On larger devices, show all pages
      return Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-3 py-1 mx-1 text-sm font-medium rounded ${
            currentPage === index + 1 ? "bg-black text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {index + 1}
        </button>
      ));
    }
  };

  return (
    <div className="bg-white rounded-lg my-2 border border-[#eaecf0]">
      {/* Table header */}
      <TableHeader headerTitle={"Recent Bookings"} />
      {/* table */}
      <div className="overflow-x-auto custom-scrollbar">
      <table className="min-w-full divide-y divide-gray-200 font-['poppins']">
          <thead className="bg-gray-50">
            <tr className="h-12">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Price
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Capacity
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Duration
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentBookings.map((booking, index) => (
              <tr key={index} className="h-16">
                <td
                  data-label="Name"
                  className="px-4 py-2 text-[#0f1728] text-sm font-medium font-['poppins'] leading-tight"
                >
                  {booking.name}
                </td>
                <td
                  data-label="Status"
                  className="px-4 py-2 text-sm w-32 max-verySm:w-full"
                >
                  <div className="flex justify-end">
                  <span
                    className={`px-2 flex gap-1 w-32 py-1  rounded-xl ${
                      booking.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    <Image
                      src={
                        booking.status === "Completed"
                          ? tickCircleIcon
                          : booking.status === "In Progress"
                          ? yellow_DotIcon
                          : red_DotIcon
                      }
                      alt={booking.status}
                      width={16}
                      height={16}
                    />
                    {booking.status}
                  </span>
                    
                  </div>
                </td>
                <td
                  data-label="Price"
                  className="px-4 py-2 text-sm text-gray-500 "
                >
                  {booking.price}
                </td>
                <td
                  data-label="Capacity"
                  className="px-4 py-2 text-sm text-gray-500"
                >
                  {booking.capacity}
                </td>
                <td
                  data-label="Duration"
                  className="px-4 py-2 text-sm text-gray-500"
                >
                  {booking.duration}
                </td>
                <td
                  data-label="Action"
                  className="px-4 py-2 text-sm text-black cursor-pointer"
                >
                  View Booking Details →
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      {/* pagination */}
      <div className="flex justify-between items-center p-4 border-t border-[#eaecf0]">
      <button
        onClick={handlePrevious}
        className={`px-4 py-2 text-sm font-medium rounded ${
          currentPage === 1 ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-black text-white"
        }`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div>{renderPaginationButtons()}</div>
      <button
        onClick={handleNext}
        className={`px-4 py-2 text-sm font-medium rounded ${
          currentPage === totalPages ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-black text-white"
        }`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
    </div>
  );
}
