import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";

function Card({ topheading, title, description }) {
  return (
    <div className='lg:w-[28vw] md:w-[100%] w-[40vw] border-[1px] border-[#505652] rounded-xl bg-[#404241] shadow-xl flex flex-col gap-y-[1vw] transition-all duration-200 hover:scale-[1.1] hover:shadow-2xl'>
        <div className='p-2 text-[#f8f8f8]'><h3 className='text-[#7a7c79] md:text-[14px] text-[2vw] lg:text-[1vw] tracking-tighter'>{topheading}</h3>
        <div className='flex flex-col leading-0'>
            <FaArrowTrendUp className='lg:text-[6.5vw] md:text-[5rem] text-[10vw]'/>
            <h2 className='lg:text-[3vw] md:text-[28px] font-semibold tracking-tight'>{title}</h2>
        </div>
        <p className='text-[#afb0af] md:text-[16px] tracking-tighter text-[2.5vw] lg:text-[1.2vw]'>{description}</p></div>
    </div>
  );
}

export default Card;
