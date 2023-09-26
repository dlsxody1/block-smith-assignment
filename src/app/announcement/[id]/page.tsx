"use client";
import React from "react";
import DeleteButton from "@/app/components/Button/DeleteButton";
import GoToListButton from "@/app/components/Button/GoToListButton";
import ModifyButton from "@/app/components/Button/ModifyButton";

const Detail = () => {
  return (
    <div>
      <div className="flex justify-center flex-col">
        <div className="mt-[60px] text-base font-semibold">공지사항</div>
        <div className="w-[800px] flex pt-[60px] pb-[64px] flex-col items-center ">
          <div className="flex justify-between flex-col pb-0  self-stretch pb-6 border-b border-[#EDEDED] ">
            <div className="font-semibold text-[32px] whitespace-pre-wrap ">
              서버에서 받아온 제목
            </div>
            <div className="font-normal text-base text-[#707070] mt-4 mb-8">
              2022 . 04. 11 (서버에서 받아온 날짜)
            </div>
          </div>
          <div>내용들</div>
        </div>

        <div className="space-x-3 mt-4">
          <GoToListButton />
          <ModifyButton />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
};

export default Detail;
