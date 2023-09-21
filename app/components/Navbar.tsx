import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 md:px-24 py-12 text-[18px] font-medium">
      <div>Tega Okorare</div>
      <div className="flex space-x-1 hover:text-[#ACA0E8] transition cursor-pointer">
        <Image src="/download.svg" alt="download" width={24} height={24} />
        <span>
          <a
            target="_blank"
            download
            href="https://drive.google.com/file/d/1TTTp-UQt9AA3UH8JYQyT94eoL46UU3_A/view?usp=sharing"
          >
            Resume
          </a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
