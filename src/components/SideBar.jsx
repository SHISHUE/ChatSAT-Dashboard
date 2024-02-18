"use client";
import React, { useCallback, useEffect, useState } from "react";
import Performance from "./Performance";
import LeaderBoard from "./LeaderBoard";
import { PiSignOut } from "react-icons/pi";
import { SlMenu } from "react-icons/sl";

function SideBar() {
  const [isSmall, setIsSmall] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleResize = useCallback(() => {
    if (window.innerWidth < 1024) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      {showNavbar && (
        <aside className="bg-[#364741] shadow-3xl absolute w-[55vw] z-40 md:w-[35vw] lg:w-[30vw] min-h-screen md:min-h-[100vh] lg:min-h-screen transition-all duration-200">
          
          <div className="px-[2vw] py-[1vw] flex items-center justify-between lg:gap-x-2 gap-1">
           <div className="flex items-center gap-2">
           <div className="lg:w-[1.8vw] w-[3vw] h-[3vw] lg:h-[1.8vw] aspect-square rounded-full bg-[#d9d8d9]"></div>
            <h2 className="text-[#8d9794] lg:text-[2vw] tracking-[-0.10em]">
              Chat <span className="text-[#fffffd]">SAT</span>
            </h2>
           </div>

            {
            isSmall && (<div
              className="text-[#f8f8f8] text-[3.5vw] md:text-[18px] px-[3vw] py-[2vw] "
              onClick={() => setShowNavbar(!showNavbar)}
            >
              <SlMenu />
            </div>)
          }
          </div>

          <div className="mx-[2vw] rounded lg:rounded-xl py-2 bg-[#495952] shadow-inner-2xl border-[1px] border-[#5b6f5f]">
            <h2 className="text-[#d6dad8] ml-3 text-[3.5vw] md:text-[16px] lg:text-[1.5vw]">New Thread</h2>
          </div>

          <div className="py-2">
            <Performance />
          </div>

          <div className="">
            <LeaderBoard />
          </div>

          <div className="mx-[2vw] py-2 flex flex-col gap-4">
            <div className="flex gap-2 items-center ">
              <div className="lg:w-[3.5vw] w-[5vw] h-[5vw] lg:h-[3.5vw] aspect-square rounded-full bg-[#d9d8d9]"></div>
              <h2 className="lg:text-[1.8vw] text-[#f8f8f8] font-semibold">
                Name
              </h2>
            </div>

            <div className="flex gap-2 shadow-inner-2xl items-center text-[#f8f8f8] lg:text-[1.4vw] cursor-pointer hover:bg-zinc-900 px-3 py-2  rounded-xl transition-all duration-200">
              <PiSignOut />
              Sign out
            </div>
          </div>
        </aside>
      )}

      {isSmall && (
        <div
          className="text-[#f8f8f8] md:text-[18px] text-[3.5vw] md:px-2  px-[2vw] py-[2vw] "
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <SlMenu />
        </div>
      )}
    </>
  );
}

export default SideBar;
