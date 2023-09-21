"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ModifyButton = () => {
  const pathname = usePathname();
  return (
    <button className="rounded-md bg-[#FF5C00] pt-2 pb-2 pr-3 pl-3 gap-2 text-center h-[38px] text-white">
      <Link href={`${pathname}/edit`}>수정</Link>
    </button>
  );
};

export default ModifyButton;
