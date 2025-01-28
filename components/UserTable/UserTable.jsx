"use client";
import React, { useState, useEffect } from "react";
import TableHeader from "../TableHeader/TableHeader";
import blue_DotIcon from "@/public/assets/table/blue_Dot.svg";
import red_DotIcon from "@/public/assets/table/red_Dot.svg";
import yellow_DotIcon from "@/public/assets/table/yellow_Dot.svg";
import tickCircleIcon from "@/public/assets/table/tick-circle.svg";
import crossIcon from "@/public/assets/table/cross.svg";
import Image from "next/image";

const users = [
  {
    name: "Olivia Daddario",
    category: "Guest",
    joinDate: "Jan 13, 2022",
    email: "Userefandax1234@gmail.com",
  },
  {
    name: "Jack Paul",
    category: "Host",
    joinDate: "Jan 12, 2022",
    email: "Userefandax1234@gmail.com",
  },
  {
    name: "Mr Alexander",
    category: "Guest",
    joinDate: "Jan 12, 2022",
    email: "Userefandax1234@gmail.com",
  },
  {
    name: "Arnold Archer",
    category: "Host",
    joinDate: "Jan 12, 2022",
    email: "Userefandax1234@gmail.com",
  },
  {
    name: "Jack Paul",
    category: "Guest",
    joinDate: "Jan 12, 2022",
    email: "Userefandax1234@gmail.com",
  },
  {
    name: "Jack Paul",
    category: "Host",
    joinDate: "Jan 12, 2022",
    email: "Userefandax1234@gmail.com",
  },
  {
    name: "Mr Alexander",
    category: "Guest",
    joinDate: "Jan 12, 2022",
    email: "Userefandax1234@gmail.com",
  },
  {
    name: "Olivia Daddario",
    category: "Guest",
    joinDate: "Jan 13, 2022",
    email: "Userefandax1234@gmail.com",
  },
  {
    name: "Olivia Daddario",
    category: "Guest",
    joinDate: "Jan 13, 2022",
    email: "Userefandax1234@gmail.com",
  },
  {
    name: "Jack Paul",
    category: "Host",
    joinDate: "Jan 12, 2022",
    email: "Userefandax1234@gmail.com",
  },
];

const PAGE_SIZE = 5;

export default function UserTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const PAGE_SIZE = 4;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentUsers = users.slice(startIndex, startIndex + PAGE_SIZE);
  const totalPages = Math.ceil(users.length / PAGE_SIZE);

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
              currentPage === 1
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
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
              currentPage === totalPages
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
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
            currentPage === index + 1
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700"
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
      <TableHeader headerTitle={"New User Registrations"} />
      {/* table */}
      <div className="">
        <table className="min-w-full divide-y divide-gray-200">
          {/* table head */}
          <thead className="bg-gray-50">
            <tr className="h-12">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Category
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Join Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Email
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Action
              </th>
            </tr>
          </thead>
          {/* body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {currentUsers.map((user, index) => (
              <tr key={index} className="h-16">
                <td
                  data-label="Name"
                  className="px-4 py-2 text-sm text-gray-700"
                >
                  {user.name}
                </td>
                <td data-label="Category" className="px-4 py-2 text-sm">
                  <div className="flex justify-end">
                  <span
                    className={`px-2 py-1 flex rounded-lg gap-1 w-20 ${
                      user.category === "Guest"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    <Image
                      src={
                        user.category === "Guest"
                          ? blue_DotIcon
                          : yellow_DotIcon
                      }
                      alt={user.category}
                      width={16}
                      height={16}
                    />
                    {user.category}
                  </span>
                  </div>
                </td>
                <td
                  data-label="Join date"
                  className="px-4 py-2 text-sm text-gray-700"
                >
                  {user.joinDate}
                </td>
                <td
                  data-label="Email"
                  className="px-4 py-2 text-sm text-gray-700"
                >
                  {user.email}
                </td>
                <td data-label="Action" className="px-4 py-2 text-sm flex max-verySm:justify-center">
                  <button className="px-3 py-1 flex gap-1 items-center bg-red-100 text-red-600 rounded hover:bg-red-200 mr-2">
                    <Image
                      src={crossIcon}
                      alt={user.category}
                      width={16}
                      height={16}
                    />
                    Decline
                  </button>
                  <button className="px-3 py-1 flex gap-1 items-center bg-green-100 text-green-600 rounded hover:bg-green-200">
                    <Image
                      src={tickCircleIcon}
                      alt={user.category}
                      width={16}
                      height={16}
                    />
                    Approve
                  </button>
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
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-black text-white"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div>{renderPaginationButtons()}</div>
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
