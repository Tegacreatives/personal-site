import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center space-y-16">
      <div className="flex flex-col items-center space-y-4">
        {/* Work status */}
        <div className="flex space-x-2 items-center border rounded-3xl px-[14px] py-[10px]">
          <div className="w-[10px] h-[10px] bg-[#51FF51] rounded-full"></div>
          <span className="font-semibold text-[14px]">Available for Work</span>
        </div>
        {/* Title */}
        <div className="text-center text-[43px] md:text-[88px] font-normal">
          <h1>Okorare Tega</h1>
          <h1 className="text-[#ACA0E8]">Software Engineer</h1>
        </div>
        {/* Info */}
        <div className="text-center font-normal text-[18px]">
          Now actively seeking new opportunities, I call the picturesque town of
          Encinitas, CA my home base. <br /> When I&apos;m not immersed in the
          world of design, you&apos;ll find me riding the waves. 🏄
        </div>
      </div>
      {/* Email button */}
      <div className="flex flex-col items-center space-y-3">
        <button className="flex space-x-2 items-center rounded-3xl px-[16px] py-[12px] bg-[#F8F6EE] text-[#040404] text-[18px] font-semibold hover:bg-[#ACA0E8] transition">
          <a href="mailto:contact@tegacreatives.com">
            contact@tegacreatives.com
          </a>
        </button>
        <div className="text-[14px] font-normal">
          Click to copy email address 👆
        </div>
      </div>
    </section>
  );
};

export default Hero;
