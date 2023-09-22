import React from "react";
import WorkStatus from "./common/WorkStatus";

const Hero = () => {
  return (
    <section className="flex flex-col items-center space-y-16">
      <div className="flex flex-col items-center space-y-4">
        {/* Work status */}
        <WorkStatus />
        {/* Title */}
        <div className="text-center text-[38px] sm:text-[43px] md:text-[88px] leading-[44px] md:leading-[85px] lg:leading-[94px] font-normal">
          <h1>Tega Okorare</h1>
          <h1 className="text-[#ACA0E8]">Software Engineer</h1>
        </div>
        {/* Info */}
        <div className="text-center font-normal text-[18px]">
          Actively seeking different ways to build better, scalable and engaging
          web and mobile experiences. <br /> Although I&apos;m frontend focused,
          I somtimes love to dig into the world of backend development
        </div>
      </div>
      {/* Email button */}
      <div className="flex flex-col items-center space-y-3">
        <button className="flex space-x-2 items-center rounded-3xl px-[16px] py-[12px] bg-[#F8F6EE] text-[#040404] text-[18px] font-semibold hover:bg-[#ACA0E8] transition">
          <a href="mailto:contact@tegacreatives.com">
            contact@tegacreatives.com
          </a>
        </button>
        <div className="text-[14px] font-normal">Got something for me? 👆</div>
      </div>
    </section>
  );
};

export default Hero;
