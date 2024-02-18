import React from 'react';
import NameCard from './NameCard';

function LeaderBoard() {
  return (
    <div className='bg-[#495952] shadow-inner-2xl rounded lg:rounded-xl mx-[2vw]'>
      <div className='px-[1.5vw] py-[1.3vw] rounded lg:rounded-xl shadow-inner-2xl lg:text-[1.6vw] text-[#f8f8f8]'>
        Leaderboard
      </div>
      <div className='overflow-y-auto flex flex-col h-[25vh]  lg:h-[14.5vw] scrollbar-thin scrollbar-thumb-[#495952] scrollbar-track-[#495952] scrollbar-thumb-rounded-full scrollbar-track-rounded-full '>
        <NameCard id={"01"} name={"Name"} active={false}/>
        <NameCard id={"02"} name={"Name"} active={false}/>
        <NameCard id={"03"} name={"You"} active={true}/>
        <NameCard id={"04"} name={"Name"} active={false}/>
        <NameCard id={"05"} name={"Name"} active={false}/>
        <NameCard id={"06"} name={"Name"} active={false}/>
        
      </div>
    </div>
  );
}

export default LeaderBoard;
