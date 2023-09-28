"use client";
import React from "react";
import DeleteButton from "@/app/components/Button/DeleteButton";
import GoToListButton from "@/app/components/Button/GoToListButton";
import ModifyButton from "@/app/components/Button/ModifyButton";
import { useQuery } from "@tanstack/react-query";
import { AnnounceProps } from "@/app/types/AnnouncementTypes";
import { dateFormatter } from "@/util/dateFormatter";

const Detail = ({ params }: { params: { id: string } }) => {
  const getAnnouncementById = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/announcement/${id}`);
    const data = await res.json();
    return data.announcement;
  };
  getAnnouncementById(params.id).then((res) => console.log(res));
  const { data } = useQuery<AnnounceProps>(["announcement"], () => {
    return getAnnouncementById(params.id);
  });
  const { formattedDate } = dateFormatter(data?.createdAt as Date);

  return (
    <div>
      <div className="flex justify-center flex-col">
        <div className="mt-[60px] text-base font-semibold">공지사항</div>
        <div className="w-[800px] flex pt-[60px] pb-[64px] flex-col items-center ">
          <div className="flex justify-between  flex-col pb-0  self-stretch justify-start pb-6 border-b border-[#EDEDED] ">
            <div className="font-semibold text-[32px] whitespace-pre-wrap ">
              {data?.title}
            </div>
            <div className="font-normal text-base text-[#707070] mt-4 mb-8">
              {formattedDate}
            </div>
          </div>
          <div className="w-full mt-8 text-base text-left">{data?.content}</div>
        </div>
        <div className="space-x-3 mt-4">
          <GoToListButton />
          <ModifyButton />
          <DeleteButton id={params.id} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
