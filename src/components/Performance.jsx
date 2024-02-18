import React from "react";
import ProgressBar from "./ProgressBar";
import { SlBadge } from "react-icons/sl";

function Performance() {
  return (
    <div className="bg-[#495952] shadow-inner-2xl rounded lg:rounded-xl py-2 mx-[2vw] flex items-center justify-between gap-3 ">
      <div className="ml-2 py-2">
        <ProgressBar />
      </div>
      <div className="flex flex-col lg:gap-3 items-center mr-1">
        <div className="flex gap-1 items-center">
          <SlBadge className="text-[#ecff87] lg:text-[2.5vw]" />

          <h1 className="lg:text-[1.8vw] text-[#f8f8f8] font-semibold">
            0/233 <span className="text-[#ecff87]">XP</span>
          </h1>
        </div>

        <button className="bg-[#7a8682] text-[2vw] lg:text-[1vw] p-1 rounded shadow-inner-2xl lg:rounded-xl lg:px-4 lg:py-2 border-[1px] hover:scale-[0.9] transition-all duration-200 border-[#5b6f5f] text-[#ecff87]">Take a Quiz</button>
      </div>
    </div>
  );
}

export default Performance;
