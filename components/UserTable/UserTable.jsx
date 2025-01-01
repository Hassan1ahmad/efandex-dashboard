"use client";
import React, { useState } from "react";
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

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentUsers = users.slice(startIndex, startIndex + PAGE_SIZE);
  const totalPages = Math.ceil(users.length / PAGE_SIZE);

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
              <td className="px-4 py-2 text-sm text-gray-700">{user.name}</td>
              <td className="px-4 py-2 text-sm">
                <span
                  className={`px-2 py-1 flex rounded-lg gap-1 w-20 ${
                    user.category === "Guest"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  <Image
                    src={user.category === "Guest" ? blue_DotIcon : yellow_DotIcon}
                    alt={user.category}
                    width={16}
                    height={16}
                  />
                  {user.category}
                </span>
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {user.joinDate}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">{user.email}</td>
              <td className="px-4 py-2 text-sm flex">
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
