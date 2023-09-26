import { AnnounceSummary } from "@/app/types/AnnouncementTypes";
import React from "react";

const AnnounceArticle = ({ id, content, createdAt }: AnnounceSummary) => {
  return (
    <div
      key={id}
      className=" pt-4 pr-6 pb-5 pl-6 items-start gap-3 self-stretch cursor-pointer hover:bg-articleHover"
    >
      <div className="font-normal text-base mb-3">{content}</div>
      <div className="text-announceTime text-sm font-normal">
        {createdAt.toISOString().slice(0, 10)}
      </div>
    </div>
  );
};

export default AnnounceArticle;
