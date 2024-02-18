import React from "react";
import { SlBadge } from "react-icons/sl";

function NameCard({ id, name, active }) {
  return (
    <div className={`mx-[1vw] lg:mx-[0.5vw] flex justify-between items-center my-[0.3rem] px-[1.5vw] py-[1.1vw] rounded lg:rounded-xl cursor-pointer shadow-inner-2xl text-[1vw] text-[#f8f8f8] bg-gradient-to-b ${
      active && " from-[#67765d] to-[#5b7670]"} hover:from-[#67765d] hover:to-[#5b7670] transition duration-200`}>
      <div className="flex gap-1 items-center ">
        <p className="lg:text-[1.2vw] md:text-[14px] text-[3vw] tracking-tighter text-[#ecff87] font-semibold">
          {id}.
        </p>
        <SlBadge className="lg:text-[1.2vw] md:text-[14px] text-[3vw] tracking-tighter text-[#ecff87] font-semibold" />
        <div className="lg:w-[1.2vw] lg:h-[1.2vw] md:text-[14px] w-[2vw] h-[2vw] aspect-square rounded-full bg-[#d9d8d9]"></div>
       <p className="lg:text-[1.2vw] md:text-[14px] text-[3vw]">
       {name}
       </p>
      </div>

      <div>
        <h3 className="lg:text-[1.2vw] text-[3vw] md:text-[14px]">
          0/233 <span className="text-[#ecff87]">XP</span>
        </h3>
      </div>
    </div>
  );
}

export default NameCard;
