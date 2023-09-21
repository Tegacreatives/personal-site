"use client";
import React, { useState } from "react";

interface workPlaceItem {
  company: string;
  role: string;
  timeFrame: string;
  work: string;
}

interface workPlacesProps {
  workPlaces: workPlaceItem[];
}

const Accordion = ({ workPlaces }: workPlacesProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div className="">
      {workPlaces.map((item, index) => (
        <div className="border-b mb-2 overflow-hidden" key={index}>
          <div
            className="cursor-pointer flex flex-col lg:flex-row justify-between lg:items-center py-4 lg:py-8 space-y-5 lg:space-y-0 "
            onClick={() => toggleAccordion(index)}
          >
            {/* Company details */}
            <div>
              <div className="text-[22px] lg:text-[28px] font-normal">
                {item.company}
              </div>
              <div className="text-[12px] lg:text-[14px] font-normal">
                {item.role}
              </div>
            </div>
            {/* Timeframe */}
            <div className="">{item.timeFrame}</div>
          </div>
          {activeIndex === index && (
            <p className="p-4 text-gray-300">{item.work}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
