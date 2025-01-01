"use client";
import React, { useState } from "react";
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
];

const PAGE_SIZE = 4;

export default function BookingTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentBookings = bookings.slice(startIndex, startIndex + PAGE_SIZE);
  const totalPages = Math.ceil(bookings.length / PAGE_SIZE);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-white rounded-lg my-2 border border-[#eaecf0]">
      {/* Table header */}
      <TableHeader header={"Recent Bookings"} />
      {/* table */}
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
              <td className="px-4 py-2 text-[#0f1728] text-sm font-medium font-['poppins'] leading-tight">
                {booking.name}
              </td>
              <td className="px-4 py-2 text-sm w-32">
                <span
                  className={`px-2 flex gap-1 w-32 py-1 rounded-xl ${
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
              </td>
              <td className="px-4 py-2 text-sm text-gray-500 ">
                {booking.price}
              </td>
              <td className="px-4 py-2 text-sm text-gray-500">
                {booking.capacity}
              </td>
              <td className="px-4 py-2 text-sm text-gray-500">
                {booking.duration}
              </td>
              <td className="px-4 py-2 text-sm text-black cursor-pointer">
                View Booking Details →
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* pagination */}
      <div className="flex justify-between items-center p-4 border-t border-[#eaecf0]">
        <button
          onClick={handlePrevious}
          className={`px-4 py-2 text-sm font-medium rounded ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-black text-white"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 mx-1 text-sm font-medium rounded ${
                currentPage === index + 1
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          className={`px-4 py-2 text-sm font-medium rounded ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-black text-white"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
