"use client";
import Link from "next/link";
import React from "react";

const GoToListButton = () => {
  return (
    <button className="rounded-md bg-[#FFF] pt-2 pb-2 pr-3 pl-3 gap-2 text-center h-10 border-[#DEDEDE] border-[0.5px]">
      <Link href={`/announcement`}>목록으로</Link>
    </button>
  );
};

export default GoToListButton;
