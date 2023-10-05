import React from "react";

const WorkStatus = () => {
  return (
    <div className="work-status flex space-x-2 items-center border rounded-3xl px-[14px] py-[10px]">
      <div className="w-[10px] h-[10px] bg-[#51FF51] rounded-full"></div>
      <span className="font-semibold text-[14px]">Available for Work</span>
    </div>
  );
};

export default WorkStatus;
