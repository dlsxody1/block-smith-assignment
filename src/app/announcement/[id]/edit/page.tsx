"use client";
import React, { useState } from "react";
import CancelButton from "@/app/components/Button/CancelButton";
import SaveButton from "@/app/components/Button/SaveButton";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { dateFormatter } from "@/util/dateFormatter";
import { AnnounceProps } from "@/app/types/AnnouncementTypes";
import useInput from "@/app/hooks/useInput";
import { getAnnouncementById } from "@/api/AnnounceApi";
const QuillEditor = dynamic(() => import("@/app/components/Editor/Editor"), {
  ssr: false,
});
const Edit = ({ params }: { params: { id: string } }) => {
  const { value, onChange } = useInput();
  const { data } = useQuery<AnnounceProps>(["announcement"], () => {
    return getAnnouncementById(params.id);
  });

  const { formattedDate } = dateFormatter(data?.createdAt as Date);
  const [html, setHtml] = useState("");

  return (
    <>
      <div>
        <div className="flex justify-center flex-col">
          <div className="mt-[60px] text-base font-semibold">공지사항</div>
          <div className="w-[800px] flex pt-[60px] pb-[64px] flex-col items-center ">
            <div className="flex justify-between flex-col pb-0  self-stretch pb-6 border-b border-[#EDEDED] ">
              <textarea
                onChange={() => onChange}
                defaultValue={data?.title}
                className="overflow-hidden whitespace-nowrap  font-semibold text-[32px] "
              />

              <div className="font-normal text-base text-[#707070] mt-4 mb-8">
                {formattedDate}
              </div>
            </div>
            <div>
              <QuillEditor
                defaultContent={data?.content as string}
                html={html}
                setHtml={setHtml}
              />
            </div>
          </div>

          <div className="space-x-3 mt-4">
            <CancelButton />
            <SaveButton id={params.id} title={value} content={html} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
