import React from "react";
import Link from "next/link";
import Logo from "./Icon/Logo";

const GNB = () => {
  return (
    <div className=" flex justify-between items-start bg-[#001E4C] text-white font-normal text-[18px] pt-[10px] pr-[8px] pb-[10px] pl-[20px]">
      <Link href={"/announcement"} className="flex items-center">
        <Logo />
        <div className="ml-[77px]">홈</div>
      </Link>

      <div className="flex items-center">
        <Link
          className="text-[14px] h-9 pt-[10px] pb-[10px] pl-[12px] pr-[12px] gap-2 font-semibold"
          href={"/announcement"}
        >
          공지
        </Link>
        <div className="text-[14px] h-9 pt-[10px] pb-[10px] pl-[12px] pr-[12px] gap-2 font-semibold">
          앨범
        </div>
        <div className="text-[14px] h-9 pt-[10px] pb-[10px] pl-[12px] pr-[12px] gap-2 font-semibold">
          내정보
        </div>
      </div>
    </div>
  );
};

export default GNB;
