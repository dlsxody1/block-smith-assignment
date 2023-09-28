import { AnnounceSummary } from "@/app/types/AnnouncementTypes";
import { dateFormatter } from "@/util/dateFormatter";
import Link from "next/link";
import React from "react";

const AnnounceArticle = ({ id, content, createdAt }: AnnounceSummary) => {
  const { formattedDate } = dateFormatter(createdAt);
  return (
    <Link
      className=" pt-4 pr-6 pb-5 pl-6 items-start gap-3 self-stretch cursor-pointer hover:bg-articleHover"
      href={`/announcement/${id}`}
    >
      <div key={id}>
        <div className="font-normal text-base mb-3">{content}</div>
        <div className="text-announceTime text-sm font-normal">
          {formattedDate}
        </div>
      </div>
    </Link>
  );
};

export default AnnounceArticle;
