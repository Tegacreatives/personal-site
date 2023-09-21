import Image from "next/image";
import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-row justify-between items-center py-3">
      <div className="font-semibold text-[18px]">{title}</div>
      <Image src="/arrow2.svg" alt="download" width={17} height={17} />
    </div>
  );
};

export default Title;
