import Image from "next/image";
import React from "react";
import { FiInfo } from "react-icons/fi";
import {
  FaChevronDown,
  FaCaretDown,
} from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { tableData } from "@/data/table";

const DashboardPage = () => {
  return (
    <main className="p-3 sm:p-8 w-full gap-8 flex flex-col">
      <section className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h5 className="font-medium text-xl">Overview</h5>
          <button className="flex items-center gap-3 border rounded px-[14px] py-[6px] bg-white text-[#4D4D4D]">
            Last Month <FaChevronDown />
          </button>
        </div>
        <div className="flex gap-5 flex-wrap">
          <div className="flex-grow rounded-[8px] bg-white p-5 flex flex-col gap-4 shadow-sm h-fit min-w-[300px]">
            <h5 className="flex gap-3 items-center text-[#4D4D4D]">
              Online orders
            </h5>
            <div className="flex justify-between items-center">
              <p className="text-3xl font-medium">231</p>
              <p className="flex items-center font-medium text-base underline text-[#146EB4]">
              </p>
            </div>
          </div>
          <div className="flex-grow rounded-[8px] bg-white p-5 flex flex-col gap-4 shadow-sm h-fit min-w-[300px]">
            <h5 className="flex gap-3 items-center text-[#4D4D4D]">
              Amount received
            </h5>
            <div className="flex justify-between items-center">
              <p className="text-3xl font-medium">₹23,92,312.19</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h5 className="font-medium text-[#1A181E] text-xl">
            Transactions | This Month
          </h5>
         
        </div>
        <div className="flex flex-col px-3 pt-3 pb-2 gap-3 rounded-[8px] bg-white">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 px-4 py-[6px] border border-[#D9D9D9] text-[#808080] rounded w-full max-w-[300px]">
              <IoSearch className="text-lg" />
              <input
                type="text"
                placeholder="Search by order ID..."
                className="bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-[6px] px-3 py-[6px] border border-[#D9D9D9] text-[#4D4D4D] rounded min-w-[75px]">
                Sort{" "}
                <Image
                  src={"/updown.png"}
                  alt="updown icon"
                  width={14}
                  height={14}
                />
              </button>
              <button className="flex items-center p-2 border border-[#D9D9D9] text-[#4D4D4D] rounded">
                <FiDownload className="text-xl" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead className="text-[#4D4D4D]">
                <tr className="bg-[#F2F2F2] rounded-lg overflow-hidden">
                  <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                    Order ID
                  </th>
                  <th className="flex items-center px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                    Order date &nbsp; <FaCaretDown />
                  </th>
                  <th className="px-3 py-[10px] text-right text-sm font-medium tracking-wider">
                    Order Amount
                  </th>
                  <th className="flex items-center justify-end px-3 py-[10px] text-right text-sm font-medium tracking-wider">
                    Transaction fees &nbsp; <FiInfo />
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white px-3 divide-y divide-[#E6E6E6]">
                {tableData.map((row, index) => (
                  <tr className="text-sm" key={index}>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                      {row.orderId}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                      {row.orderDate}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                      {row.orderAmount}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                      {row.transactionFees}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
