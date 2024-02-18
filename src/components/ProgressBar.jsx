import React from "react";

function ProgressBar() {


  return (
    <div className="">
        <div className="relative w-[8vw] aspect-square circular-progress transition-all duration-200 rounded-full">
            <span className="absolute flex flex-col justify-center items-center text-[#ecff87] text-[1.4vw] lg:text-[1.2vw] font-semibold">
                4/7
                <p className="text-[#f8f8f8]">Streak</p>
            </span>
        </div>
    </div>
  );
}

export default ProgressBar;