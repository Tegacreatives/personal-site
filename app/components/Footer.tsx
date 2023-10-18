"use client";
import React from "react";
import WorkStatus from "./common/WorkStatus";
import Image from "next/image";

const socials = [
  {
    title: "Github",
    socialUrl: "https://github.com/Tegacreatives",
  },
  {
    title: "Linkedin",
    socialUrl: "https://www.linkedin.com/in/okorare-tega-36008520b/",
  },
  {
    title: "Twitter",
    socialUrl: "https://twitter.com/justtega_00",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <div className="px-10 md:px-24 space-y-28 py-12">
      {/* Footer heading */}
      <div className="space-y-10">
        <div className="flex flex-col items-center space-y-4">
          {/* Work status */}
          <WorkStatus />
          {/* Title */}
          <div className="text-center text-[40px] md:text-[69px] leading-[44px] md:leading-[85px] lg:leading-[75.9px] font-normal">
            <h1>Let&apos;s collaborate and </h1>
            <h1>bring your vision to life!</h1>
          </div>
        </div>
        {/* Email button */}
        <div className="flex flex-col items-center space-y-3">
          <button className="flex space-x-2 items-center rounded-3xl px-[16px] py-[12px] text-[18px] font-semibold transition">
            <a href="mailto:contact@tegacreatives.com">
              contact@tegacreatives.com
            </a>
          </button>
          <div className="text-[14px] font-normal">
            Got something for me? 👆
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center justify-between">
        {/* footer contact */}
        <div className=" space-y-5 flex flex-col items-center lg:items-start">
          {/* social links */}
          <div className="flex space-x-5">
            {socials.map((item, index) => (
              <div key={index} className="font-semibold text-[14px]">
                <a href={item.socialUrl} target="_blank">
                  {item.title}
                </a>
              </div>
            ))}
          </div>
          {/* copyright */}
          <div className="text-[14px] text-center lg:text-left font-normal">
            ©2023 Developed by Me - Next.js | Tailwind Css | Sanity.io
          </div>
        </div>
        <div className="space-y-3">
          {/* Going up */}
          <div
            onClick={scrollToTop}
            className="w-[80px] h-[80px] bg-[#ACA0E8] rounded-full flex justify-center items-center cursor-pointer"
          >
            <Image
              className="transform transition-transform ease-in-out duration-300  -rotate-90"
              src="/arrow.svg"
              alt="download"
              width={40}
              height={40}
            />
          </div>
          <div className="font-semibold text-[18px]">Going Up?</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
